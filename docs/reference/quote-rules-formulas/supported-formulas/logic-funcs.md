# Logical functions


## AND
Returns TRUE if all expressions evaluate to true. Returns FALSE otherwise.

`AND(expression1, [expression2], ...)`

##### parameters

| parameters       | type    | required | default | description                                  |
|------------------|---------|----------|---------|----------------------------------------------|
| expression1      | boolean | yes      | -       | Condition to evaluate to TRUE or FALSE       |
| expression2, ... | boolean | no       | -       | More conditions to evaluate to TRUE or FALSE |

##### example

| formula                         | result |
|---------------------------------|--------|
| `=AND(1^0=1, 2^0=1)`            | TRUE   |
| `=AND(TRUE)`                    | TRUE   |
| `=AND(TRUE, TRUE, TRUE, FALSE)` | FALSE  |

## FALSE
Returns the logical value FALSE. It is equivalent to using the value FALSE directly.

`FALSE()`

##### parameters

This function has no parameters.

##### example

| formula                     | result |
|-----------------------------|--------|
| `=FALSE()`                  | FALSE  |
| `=IF(1=1, TRUE(), FALSE())` | FALSE  |
| `=IF(1=1, TRUE, FALSE)`     | FALSE  |

## IF
Returns `true_result` if the provided `condition` is true. Otherwise, `false_result` is returned.

`IF(condition, [true_result], [false_result])`

##### Known Bugs

- [IF operator has weird behavior](https://pandadoc.atlassian.net/browse/PD-61295)

##### parameters

| parameters   | type    | required | default | description                            |
|--------------|---------|----------|---------|----------------------------------------|
| condition    | boolean | yes      | -       | Condition to evaluate to TRUE or FALSE |
| true_result  | Any     | no       | true    | Value to return if condition is true   |
| false_result | Any     | no       | false   | Value to return if condition is false  |

NOTE: If `true_result`/`false_result` are arrays, they must have the same length. Otherwise, the behaviour is unspecified (may result in an error or an incorrect result).

##### example

| formula                                            | result    |
|----------------------------------------------------|-----------|
| `=IF(TRUE, 1, 2)`                                  | 1         |
| `=IF(1+1=3)`                                       | TRUE      |
| `=IF(ARABIC("MMXXIV")=2024, {1, 2, 3}, {4, 5, 6})` | {1, 2, 3} |

JSON example:

```json
{
    "op": "$eq",
    "left": {
        "op": "$fm",
        "value": "CONCATENATE([term], \" \" ,IF([type]=\"annual\", \"years, annually\", \"years, upfront\"))"
    },
    "right": "12 years, annually"
}
```

## IFERROR
Returns the first argument if it does not result in an error. Otherwise, it returns the second argument.

This function is useful to handle errors in a formula, allowing specification of alternate behaviour if an error occurs.

`IFERROR(value, value_if_error)`

##### Known Bugs

- [IF operator has weird behavior](https://pandadoc.atlassian.net/browse/PD-61295)

##### parameters

| parameters     | type | required | default | description                                       |
|----------------|------|----------|---------|---------------------------------------------------|
| value          | Any  | yes      | -       | Value to return if it does not result in an error |
| value_if_error | Any  | yes      | -       | Value to return otherwise                         |

NOTE: If `value`/`value_if_error` are arrays, they must have the same length. Otherwise, the behaviour is unspecified (may result in an error or an incorrect result).

##### example

| formula                       | result   |
|-------------------------------|----------|
| `=IFERROR(1/0, "Error!")`     | "Error!" |
| `=IFERROR(TAN(0), "???")`     | 0        |
| `=IFERROR(TAN("abc"), "???")` | "???"    |

## IFNA
Returns the first argument if it does not result in a #N/A error. Otherwise, it returns the second argument.

This is a more restrictive version of the `IFERROR` formula, as it only handles #N/A errors.

`IFNA(value, value_if_na)`

##### Known Bugs

- [IF operator has weird behavior](https://pandadoc.atlassian.net/browse/PD-61295)

##### parameters

| parameters  | type | required | default | description                                       |
|-------------|------|----------|---------|---------------------------------------------------|
| value       | Any  | yes      | -       | Value to return if it does not result in an error |
| value_if_na | Any  | yes      | -       | Value to return otherwise                         |

NOTE: If `value`/`value_if_na` are arrays, they must have the same length. Otherwise, the behaviour is unspecified (may result in an error or an incorrect result).

##### example

| formula                                | result  |
|----------------------------------------|---------|
| `=IFNA(NA(), FALSE)`                   | FALSE   |
| `=IFNA(MATCH(3, {1, 2, 3}, -1), ":(")` | ":("    |
| `=IFNA("hello", "ERROR!!!")`           | "hello" |

## IFS
Returns the value corresponding to the first condition that evaluates to true.

A default result can be emulated by specifying the last `condition` as `TRUE`. As this will always evaluate to true, it is guaranteed that the corresponding value will be returned, if no previous condition is true too.

`IFS(condition1, value_if_true1, [condition2, value_if_true2], ...)`

##### Known Bugs

- [IF operator has weird behavior](https://pandadoc.atlassian.net/browse/PD-61295)

##### parameters

| parameters                      | type         | required | default | description                                                                       |
|---------------------------------|--------------|----------|---------|-----------------------------------------------------------------------------------|
| condition1                      | boolean      | yes      | -       | Condition to evaluate                                                             |
| value_if_true1                  | Any          | yes      | -       | Value to return if condition1 is true                                             |
| condition2, value_if_true2, ... | boolean, Any | no       | -       | More conditions to evaluate, and respective values to return if condition is true |

NOTE: If any `value_if_true` argument is an array, then all of them must be arrays with the same length. Otherwise, the behaviour is unspecified (may result in an error or an incorrect result).

##### example

| formula                                                             | result    |
|---------------------------------------------------------------------|-----------|
| `=IFS(1+1=1, "first", 1+1=2, "second", 1+1=3, "third")`             | "second"  |
| `=IFS(1>2, "first", 2>3, "second", 3<>3, "third", TRUE, "default")` | "default" |
| `=IFS(FALSE, {1, 1}, TRUE, {1, 2}, 1+1=3, {1, 3})`                  | {1, 2}    |

## NOT
Returns the reverse logical value if its argument.

`NOT(expression)`

##### parameters

| parameters      | type    | required | default | description                            |
|-----------------|---------|----------|---------|----------------------------------------|
| expression      | boolean | yes      | -       | Condition to evaluate to TRUE or FALSE |

##### example

| formula           | result |
|-------------------|--------|
| `=NOT(TRUE)`      | FALSE  |
| `=NOT(NOT(TRUE))` | TRUE   |
| `=NOT(3*0=1)`     | TRUE   |

## OR
Returns TRUE if at least one expression evaluates to true. Returns FALSE otherwise.

`OR(expression1, [expression2], ...)`

##### parameters

| parameters       | type    | required | default | description                                  |
|------------------|---------|----------|---------|----------------------------------------------|
| expression1      | boolean | yes      | -       | Condition to evaluate to TRUE or FALSE       |
| expression2, ... | boolean | no       | -       | More conditions to evaluate to TRUE or FALSE |

##### example

| formula                   | result |
|---------------------------|--------|
| `=OR(1^0=1, 2^0=2)`       | TRUE   |
| `=OR(TRUE)`               | TRUE   |
| `=OR(TRUE, FALSE, FALSE)` | FALSE  |

## SWITCH
Returns the value corresponding to the first `match` argument that matches the provided `expression`.

If there is no match, a default value is returned, if provided; otherwise, an `#N/A` error is raised.

`SWITCH(expression, match1, value_if_match1, [match2, value_if_match2], ..., default_value)`

##### Known Bugs

- [IF operator has weird behavior](https://pandadoc.atlassian.net/browse/PD-61295)

##### parameters

| parameters                   | type     | required | default | description                                                                   |
|------------------------------|----------|----------|---------|-------------------------------------------------------------------------------|
| expression                   | Any      | yes      | -       | Value against which all provided `match` arguments are evaluated              |
| match1                       | Any      | yes      | -       | Value to compare against the provided `expression`                            |
| value_if_match1              | Any      | yes      | -       | Value to return if `match1` matches the provided `expression`                 |
| match2, value_if_match2, ... | Any, Any | no       | -       | More arguments, analogous to `match1` and its corresponding `value_if_match1` |
| default_value                | Any      | no       | -       | Value to return if no `match` argument matches the provided expression        |

NOTE: If any `value_if_match` argument is an array, then all of them must be arrays with the same length. Otherwise, the behaviour is unspecified (may result in an error or an incorrect result).

##### example

| formula                                                                 | result    |
|-------------------------------------------------------------------------|-----------|
| `=SWITCH(ARABIC("II"), 1, "first", 2, "second", 3, "third", "default")` | "second"  |
| `=SWITCH(ARABIC("V"), 1, "first", 2, "second", 3, "third", "default")`  | "default" |
| `=SWITCH(MOD(5, 2), 0, "EVEN", 1, "ODD")`                               | "ODD"     |

## TRUE
Returns the logical value TRUE. It is equivalent to using the value TRUE directly.

`TRUE()`

##### parameters

This function has no parameters.

##### example

| formula            | result |
|--------------------|--------|
| `=TRUE()`          | TRUE   |
| `=IF(1=1, TRUE())` | TRUE   |
| `=IF(1=1, TRUE)`   | TRUE   |

## XOR
Computes the logical exclusive or of all expressions.

As such, it returns TRUE if an odd number of expressions evaluate to true. It returns FALSE if an even number of expressions evaluate to false.

`XOR(expression1, [expression2], ...)`

##### parameters

| parameters       | type    | required | default | description                                  |
|------------------|---------|----------|---------|----------------------------------------------|
| expression1      | boolean | yes      | -       | Condition to evaluate to TRUE or FALSE       |
| expression2, ... | boolean | no       | -       | More conditions to evaluate to TRUE or FALSE |

##### example

| formula                   | result |
|---------------------------|--------|
| `=XOR(1^0=1, 2^0=2)`      | TRUE   |
| `=XOR(1+1>1, 2+2>2)`      | FALSE  |
| `=XOR(TRUE)`              | TRUE   |
| `=XOR(TRUE, FALSE)`       | TRUE   |
| `=XOR(TRUE, TRUE, FALSE)` | FALSE  |
