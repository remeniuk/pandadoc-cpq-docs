# Information functions


## ISBLANK
Returns `true` if the provided value is empty after coercing it to a string.
Otherwise, `false` is returned.

`ISBLANK(value)`

##### parameters

| parameters | type | required | default | description       |
|------------|------|----------|---------|-------------------|
| value      | any  | yes      | -       | Value to evaluate |

##### example

| formula            | result |
|--------------------|--------|
| `=ISBLANK("")`     | `true` |
| `=ISBLANK(0)`      | `false`|
| `=ISBLANK("abc")`  | `false`|
| `=ISBLANK(#NULL!)` | `false`|

## ISERR
Returns `true` if the provided value refers to any error value except #N/A.
Otherwise, `false` is returned.

If the provided value is an array, the function is applied for each element in the array, and an array of boolean values will be returned.

`ISERR(value)`

##### parameters

| parameters | type | required | default | description       |
|------------|------|----------|---------|-------------------|
| value      | any  | yes      | -       | Value to evaluate |

##### example

| formula                | result         |
|------------------------|----------------|
| `=ISERR(1/0)`          | `true`         |
| `=ISERR(1+1)`          | `false`        |
| `=ISERR(#N/A)`         | `false`        |
| `=ISERR({"abc", 1})`   | `{false, false}`|
| `=ISERR({#VALUE!, 1})` | `{true, false}`|

## ISERROR
Returns `true` if the provided value refers to any error value.
Otherwise, `false` is returned.

The following are error values: #N/A, #VALUE!, #REF!, #DIV/0!, #NUM!, #NAME?, #NULL!

If the provided value is an array, the function is applied for each element in the array, and an array of boolean values will be returned.

`ISERROR(value)`

##### parameters

| parameters | type | required | default | description       |
|------------|------|----------|---------|-------------------|
| value      | any  | yes      | -       | Value to evaluate |

##### example

| formula                  | result         |
|--------------------------|----------------|
| `=ISERROR(1/0)`          | `true`         |
| `=ISERROR(1+1)`          | `false`        |
| `=ISERROR(#N/A)`         | `true`         |
| `=ISERROR({"abc", 1})`   | `{false, false}`|
| `=ISERROR({#VALUE!, 1})` | `{true, false}`|

## ISEVEN
Returns `true` if the provided number is even, or `false` otherwise.

`ISEVEN(number)`

##### parameters

| parameters | type   | required | default | description                                         |
|------------|--------|----------|---------|-----------------------------------------------------|
| value      | number | yes      | -       | Any number. If not an integer, it will be truncated |

##### example

| formula        | result |
|----------------|--------|
| `=ISEVEN(2)`   | `true` |
| `=ISEVEN(1)`   | `false`|
| `=ISEVEN(2.9)` | `true` |

## ISLOGICAL
Returns `true` if the provided value is `true` or `false`.

If the provided value is an array, the behavior is unspecified.

`ISLOGICAL(value)`

##### parameters

| parameters | type               | required | default | description       |
|------------|--------------------|----------|---------|-------------------|
| value      | any (except array) | yes      | -       | Value to evaluate |

##### example

| formula             | result |
|---------------------|--------|
| `=ISLOGICAL(true)`  | `true` |
| `=ISLOGICAL(false)` | `true` |
| `=ISLOGICAL(0)`     | `false`|
| `=ISLOGICAL(1*1=2)` | `true` |

## ISNA
Returns `true` if the provided value refers is the error value #N/A.

If the provided value is an array, the function is applied for each element in the array, and an array of boolean values will be returned.

`ISNA(value)`

##### parameters

| parameters | type | required | default | description       |
|------------|------|----------|---------|-------------------|
| value      | any  | yes      | -       | Value to evaluate |

##### example

| formula                | result         |
|------------------------|----------------|
| `=ISNA(#N/A)`          | `true`         |
| `=ISNA(#NULL!)`        | `false`        |
| `=ISNA({1, NA()})`     | `{false, true}`|

## ISNONTEXT
Returns `true` if the provided value is not text, or `false` otherwise.

If the provided value is an array, the function is applied for each element in the array, and an array of boolean values will be returned.

`ISNONTEXT(value)`

##### parameters

| parameters | type | required | default | description       |
|------------|------|----------|---------|-------------------|
| value      | any  | yes      | -       | Value to evaluate |

##### example

| formula                      | result        |
|------------------------------|---------------|
| `=ISNONTEXT("txt")`          | `false`       |
| `=ISNONTEXT(7)`              | `true`        |
| `=ISNONTEXT({#N/A, "#N/A"})` | `{true, false}`|

## ISNUMBER
Returns `true` if the provided value is a number or a string that can be coerced to a number. Otherwise, `false` is returned.

If the provided value is an array, the function is applied for each element in the array, and an array of boolean values will be returned.

`ISNUMBER(value)`

##### parameters

| parameters | type | required | default | description       |
|------------|------|----------|---------|-------------------|
| value      | any  | yes      | -       | Value to evaluate |

##### example

| formula                      | result              |
|------------------------------|---------------------|
| `=ISNUMBER(3.14)`            | `true`              |
| `=ISNUMBER("3.14")`          | `true`              |
| `=ISNUMBER("I")`             | `false`             |
| `=ISNUMBER({"one", 2, "3"})` | `{false, true, true}`|

## ISODD
Returns `true` if the provided number is even, or `false` otherwise.

`ISODD(number)`

##### parameters

| parameters | type   | required | default | description                                         |
|------------|--------|----------|---------|-----------------------------------------------------|
| value      | number | yes      | -       | Any number. If not an integer, it will be truncated |

##### example

| formula        | result |
|----------------|--------|
| `=ISODD(1)`    | `true` |
| `=ISODD(2)`    | `false`|
| `=ISODD(-1.9)` | `true` |

## ISTEXT
Returns `true` if the provided value is text, or `false` otherwise.

If the provided value is an array, the function is applied for each element in the array, and an array of boolean values will be returned.

`ISTEXT(value)`

##### parameters

| parameters | type | required | default | description       |
|------------|------|----------|---------|-------------------|
| value      | any  | yes      | -       | Value to evaluate |

##### example

| formula                   | result        |
|---------------------------|---------------|
| `=ISTEXT("txt")`          | `true`        |
| `=ISTEXT(7)`              | `false`       |
| `=ISTEXT({#N/A, "#N/A"})` | `{false, true}`|

## NA
Returns the error value #N/A, meaning that no value is available. It is equivalent to using the error value directly.

`NA()`

##### parameters

This function has no parameters.

##### example

| formula       | result |
|---------------|--------|
| `=ISNA(NA())` | `true` |
