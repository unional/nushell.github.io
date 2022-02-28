# Modules

Similar to many other programming languages, Nushell also has modules that let you import custom commands into a current scope.
However, since Nushell is also a shell, modules allow you to import environment variables which can be used to conveniently activate/deactivate various environments.

## Basics

A simple module can be defined like this:
```
> module greetings {
     export def hello [name: string] {
         $"hello ($name)!"
     }

     export def hi [where: string] {
         $"hi ($where)!"
     }
}
```
or in a file named the name of the module you want to create:
```
# greetings.nu

export def hello [name: string] {
    $"hello ($name)!"
}

export def hi [where: string] {
    $"hi ($where)!"
}
```

We defined `hello` and `hi` custom commands inside a `greetings` module.

The `export` keyword makes it possible to later import the commands from the module.

## Using modules

By itself, the module does not do anything. To use what a module produces, we need to `use` it.

```
> use greetings

> greetings hello "world"
hello world!

> greetings hi "there"
hi there!
```
The `hello` and `hi` commands are now available with the `greetings` prefix.

## Importing symbols

In general, anything after the `use` keyword forms an **import pattern** which controls how the symbols are imported.
The import pattern can be one of the following:

`use greeting`

Importing just the module name imports all symbols with the module name as a prefix.

`use greeting hello`

Importing the module name and the name of an export will import only the selected command into the current scope.

`use greeting [ hello, hi ]`

Importing the module and a list of names will import only the listed commands into the current scope.

`use greetings *`

You can also use the module name and the `*` glob import to import all names directly into the current scope

## Module files

Typing the module definition to the command line can be tedious.
You could save the module code into a script and `source` it.
However, there is another way that lets Nushell implicitly treat a source file as a module.
Let's start by saving the body of the module definition into a file:
```
# greetings.nu

export def hello [name: string] {
    $"hello ($name)!"
}

export def hi [where: string] {
    $"hi ($where)!"
}
```

Now, you can use `use` directly on the file:
```
> use greetings.nu

> greetings hello "world"
hello world!

> greetings hi "there"
hi there!
```

Nushell automatically infers the module's name from the base name of the file ("greetings" without the ".nu" extension).
You can use any import patterns as described above with the file name instead of the module name.

## Local Custom Commands

Any custom commands defined in a module without the `export` keyword will work only in the module's scope:
```
# greetings.nu

export def hello [name: string] {
    greetings-helper "hello" "world"
}

export def hi [where: string] {
    greetings-helper "hi" "there"
}

def greetings-helper [greeting: string, subject: string] {
    $"($greeting) ($subject)!"
}
```
Then, in Nushell we import all definitions from the "greetings.nu":
```
> use greetings.nu *

> hello "world"
hello world!

> hi "there"
hi there!

> greetings-helper "foo" "bar"  # fails because 'greetings-helper' is not exported
```

## Environment Variables

So far we used modules just to import custom commands.
It is possible to export environment variables the same way.
The syntax is slightly different than what you might be used to from commands like `let-env` or `load-env`:
```
# greetings.nu

export env MYNAME { "Arthur, King of the Britons" }

export def hello [name: string] {
    $"hello ($name)"
}
```
`use` works the same way as with custom commands:
```
> use greetings.nu

> $env."greetings MYNAME"
Arthur, King of the Britons

> greetings hello $env."greetings MYNAME"
hello Arthur, King of the Britons!
```

You can notice we do not assign the value to `MYNAME` directly.
Instead, we give it a block of code (`{ ...}`) that gets evaluated every time we call `use`.
We can demonstrate this property for example with the `random` command:
```
> module roll { export env ROLL { random dice | into string } }

> use roll ROLL

> $env.ROLL
4

> $env.ROLL
4

> use roll ROLL

> $env.ROLL
6

> $env.ROLL
6
```

## Hiding

Any custom command or environment variable, imported from a module or not, can be "hidden", restoring the previous definition.
We do this with the `hide` command:
```
> def foo [] { "foo" }

> foo
foo

> hide foo

> foo  # error! command not found!
```

The `hide` command also accepts import patterns, just like `use`.
The import pattern is interpreted slightly differently, though.
It can be one of the following:

`hide foo` or `hide greetings`
* If the name is a custom command or an environment variable, hides it directly. Otherwise:
* If the name is a module name, hides all of its overlay prefixed with the module name

`hide greetings hello`

* Hides only the prefixed command / environment variable

`hide greetings [hello, hi]`

* Hides only the prefixed commands / environment variables

`hide greetings *`

* Hides the whole module's overlay, without the prefix

Let's show these with examples.
We saw direct hiding of a custom command already.
Let's try environment variables:
```
> let-env FOO = "FOO"

> $env.FOO
FOO

> hide FOO

> $env.FOO  # error! environment variable not found!
```
The first case also applies to commands / environment variables brought from a module (using the "greetings.nu" file defined above):
```
> use greetings.nu *

> $env.MYNAME
Arthur, King of the Britons

> hello "world"
hello world!

> hide MYNAME

> $env.MYNAME  # error! environment variable not found!

> hide hello

> hello "world" # error! command not found!
```
And finally, when the name is the module name (assuming the previous `greetings` module):
```
> use greetings.nu

> $env."greetings MYNAME"
Arthur, King of the Britons

> greetings hello "world"
hello world!

> hide greetings

> $env."greetings MYNAME"  # error! environment variable not found!

> greetings hello "world" # error! command not found!
```