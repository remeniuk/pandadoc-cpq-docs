# Information functions


## ISBLANK
Returns TRUE if the provided value is empty after coercing it to a string.
Otherwise, FALSE is returned.

`ISBLANK(value)`

##### parameters

| parameters | type | required | default | description       |
|------------|------|----------|---------|-------------------|
| value      | any  | yes      | -       | Value to evaluate |

##### example

| formula            | result |
|--------------------|--------|
| `=ISBLANK("")`     | TRUE   |
| `=ISBLANK(0)`      | FALSE  |
| `=ISBLANK("abc")`  | FALSE  |
| `=ISBLANK(#NULL!)` | FALSE  |

## ISERR
Returns TRUE if the provided value refers to any error value except #N/A.
Otherwise, FALSE is returned.

If the provided value is an array, the function is applied for each element in the array, and an array of boolean values will be returned.

`ISERR(value)`

##### parameters

| parameters | type | required | default | description       |
|------------|------|----------|---------|-------------------|
| value      | any  | yes      | -       | Value to evaluate |

##### example

| formula                | result         |
|------------------------|----------------|
| `=ISERR(1/0)`          | TRUE           |
| `=ISERR(1+1)`          | FALSE          |
| `=ISERR(#N/A)`         | FALSE          |
| `=ISERR({"abc", 1})`   | {FALSE, FALSE} |
| `=ISERR({#VALUE!, 1})` | {TRUE, FALSE}  |

## ISERROR
Returns TRUE if the provided value refers to any error value.
Otherwise, FALSE is returned.

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
| `=ISERROR(1/0)`          | TRUE           |
| `=ISERROR(1+1)`          | FALSE          |
| `=ISERROR(#N/A)`         | TRUE           |
| `=ISERROR({"abc", 1})`   | {FALSE, FALSE} |
| `=ISERROR({#VALUE!, 1})` | {TRUE, FALSE}  |

## ISEVEN
Returns TRUE if the provided number is even, or FALSE otherwise.

`ISEVEN(number)`

##### parameters

| parameters | type   | required | default | description                                         |
|------------|--------|----------|---------|-----------------------------------------------------|
| value      | number | yes      | -       | Any number. If not an integer, it will be truncated |

##### example

| formula        | result |
|----------------|--------|
| `=ISEVEN(2)`   | TRUE   |
| `=ISEVEN(1)`   | FALSE  |
| `=ISEVEN(2.9)` | TRUE   |

## ISLOGICAL
Returns TRUE if the provided value is TRUE or FALSE.

If the provided value is an array, the behavior is unspecified.

`ISLOGICAL(value)`

##### parameters

| parameters | type               | required | default | description       |
|------------|--------------------|----------|---------|-------------------|
| value      | any (except array) | yes      | -       | Value to evaluate |

##### example

| formula             | result |
|---------------------|--------|
| `=ISLOGICAL(TRUE)`  | TRUE   |
| `=ISLOGICAL(FALSE)` | TRUE   |
| `=ISLOGICAL(0)`     | FALSE  |
| `=ISLOGICAL(1*1=2)` | TRUE   |

## ISNA
Returns TRUE if the provided value refers is the error value #N/A.

If the provided value is an array, the function is applied for each element in the array, and an array of boolean values will be returned.

`ISNA(value)`

##### parameters

| parameters | type | required | default | description       |
|------------|------|----------|---------|-------------------|
| value      | any  | yes      | -       | Value to evaluate |

##### example

| formula                | result         |
|------------------------|----------------|
| `=ISNA(#N/A)`          | TRUE           |
| `=ISNA(#NULL!)`        | FALSE          |
| `=ISNA({1, NA()})`     | {FALSE, TRUE}  |

## ISNONTEXT
Returns TRUE if the provided value is not text, or FALSE otherwise.

If the provided value is an array, the function is applied for each element in the array, and an array of boolean values will be returned.

`ISNONTEXT(value)`

##### parameters

| parameters | type | required | default | description       |
|------------|------|----------|---------|-------------------|
| value      | any  | yes      | -       | Value to evaluate |

##### example

| formula                      | result        |
|------------------------------|---------------|
| `=ISNONTEXT("txt")`          | FALSE         |
| `=ISNONTEXT(7)`              | TRUE          |
| `=ISNONTEXT({#N/A, "#N/A"})` | {TRUE, FALSE} |

## ISNUMBER
Returns TRUE if the provided value is a number or a string that can be coerced to a number. Otherwise, FALSE is returned.

If the provided value is an array, the function is applied for each element in the array, and an array of boolean values will be returned.

`ISNUMBER(value)`

##### parameters

| parameters | type | required | default | description       |
|------------|------|----------|---------|-------------------|
| value      | any  | yes      | -       | Value to evaluate |

##### example

| formula                      | result              |
|------------------------------|---------------------|
| `=ISNUMBER(3.14)`            | TRUE                |
| `=ISNUMBER("3.14")`          | TRUE                |
| `=ISNUMBER("I")`             | FALSE               |
| `=ISNUMBER({"one", 2, "3"})` | {FALSE, TRUE, TRUE} |

## ISODD
Returns TRUE if the provided number is even, or FALSE otherwise.

`ISODD(number)`

##### parameters

| parameters | type   | required | default | description                                         |
|------------|--------|----------|---------|-----------------------------------------------------|
| value      | number | yes      | -       | Any number. If not an integer, it will be truncated |

##### example

| formula        | result |
|----------------|--------|
| `=ISODD(1)`    | TRUE   |
| `=ISODD(2)`    | FALSE  |
| `=ISODD(-1.9)` | TRUE   |

## ISTEXT
Returns TRUE if the provided value is text, or FALSE otherwise.

If the provided value is an array, the function is applied for each element in the array, and an array of boolean values will be returned.

`ISTEXT(value)`

##### parameters

| parameters | type | required | default | description       |
|------------|------|----------|---------|-------------------|
| value      | any  | yes      | -       | Value to evaluate |

##### example

| formula                   | result        |
|---------------------------|---------------|
| `=ISTEXT("txt")`          | TRUE          |
| `=ISTEXT(7)`              | FALSE         |
| `=ISTEXT({#N/A, "#N/A"})` | {FALSE, TRUE} |

## NA
Returns the error value #N/A, meaning that no value is available. It is equivalent to using the error value directly.

`NA()`

##### parameters

This function has no parameters.

##### example

| formula       | result |
|---------------|--------|
| `=ISNA(NA())` | TRUE   |

