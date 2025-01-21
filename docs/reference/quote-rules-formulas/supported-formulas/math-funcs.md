# Math and trigonometry functions


## ABS
Returns the absolute value of a number (removes its negative sign, if it exists).

`ABS(number)`

##### parameters

| parameters   | type   | required | default | description                                   |
|--------------|--------|----------|---------|-----------------------------------------------|
| number       | number | yes      | -       | Number of which the absolute value is desired |

##### example

| formula    | result |
|------------|--------|
| `=ABS(1)`  | 1      |
| `=ABS(-2)` | 2      |

## ACOS
Returns the arccosine / inverse cosine of a number, which is the angle whose cosine is the provided number.

The returned angle is in radians (between 0 and π);
to convert to degrees, use the `DEGREES` function, or multiply by `180/PI()`.

`ACOS(number)`

##### parameters

| parameters   | type   | required | default | description                    |
|--------------|--------|----------|---------|--------------------------------|
| number       | number | yes      | -       | Number ranged between -1 and 1 |

##### example

| formula              | result                         |
|----------------------|--------------------------------|
| `=ACOS(1)`           | 0                              |
| `=ACOS(-1)`          | 3.141592653589793 (value of π) |
| `=DEGREES(ACOS(-1))` | 180                            |
| `=ACOS(-1)*180/PI()` | 180                            |

## ACOSH
Returns the inverse hyperbolic cosine of a number, which is the value whose hyperbolic cosine is the provided number.

`ACOSH(number)`

##### parameters

| parameters   | type   | required | default | description                       |
|--------------|--------|----------|---------|-----------------------------------|
| number       | number | yes      | -       | Number greater than or equal to 1 |

##### example

| formula            | result            |
|--------------------|-------------------|
| `=ACOSH(1)`        | 0                 |
| `=ACOSH(1000)`     | 7.600902209541989 |
| `=ACOSH(COSH(10))` | 10                |

## ACOT
Returns the arccotangent / inverse cotangent of a number, which is the angle whose cotangent is the provided number.

The returned angle is in radians (between 0 and π);
to convert to degrees, use the `DEGREES` function, or multiply by `180/PI()`.

`ACOT(number)`

##### parameters

| parameters   | type   | required | default | description     |
|--------------|--------|----------|---------|-----------------|
| number       | number | yes      | -       | Any real number |

##### example

| formula              | result                                 |
|----------------------|----------------------------------------|
| `=ACOT(0)`           | 1.5707963267948966 (value of π/2)      |
| `=DEGREES(ACOT(0))`  | 90 (value of π/2 converted to degrees) |
| `=ACOT(0)*180/PI()`  | 90                                     |

## ACOTH
Returns the inverse hyperbolic tangent of a number, which is the value whose hyperbolic tangent is the provided number.

The provided number's absolute value must be greater than 1.

`ACOTH(number)`

##### parameters

| parameters   | type   | required | default | description                           |
|--------------|--------|----------|---------|---------------------------------------|
| number       | number | yes      | -       | Number less than -1 or greater than 1 |

##### example

| formula                      | result                                          |
|------------------------------|-------------------------------------------------|
| `=ACOTH(-1.23)`              | -1.1358387777654846                             |
| `=ACOTH(10)`                 | 0.10033534773107558                             |
| `=ACOTH(COTH(10))`           | 9.999999982054335 (due to approximation errors) |
| `=ROUND(ACOTH(COTH(10)), 0)` | 10                                              |

## ARABIC
Returns the Arabic numeral corresponding to the provided Roman numeral.

The input is not case-sensitive. If an empty string is provided, the number 0 will be returned.

`ARABIC(text)`

##### parameters

| parameters | type   | required | default | description                                                              |
|------------|--------|----------|---------|--------------------------------------------------------------------------|
| text       | string | yes      | -       | Case-insensitive string representing a Romal numeral, or an empty string |

##### example

| formula                | result |
|------------------------|--------|
| `=ARABIC("MMXXIV")`    | 2024   |
| `=ARABIC(ROMAN(2024))` | 2024   |
| `=ARABIC("")`          | 0      |

## ASIN
Returns the arcsine / inverse sine of a number, which is the angle whose sine is the provided number.

The returned angle is in radians (between -π/2 and π/2);
to convert to degrees, use the `DEGREES` function, or multiply by `180/PI()`.

`ASIN(number)`

##### parameters

| parameters   | type   | required | default | description                    |
|--------------|--------|----------|---------|--------------------------------|
| number       | number | yes      | -       | Number ranged between -1 and 1 |

##### example

| formula                         | result                                                    |
|---------------------------------|-----------------------------------------------------------|
| `=ASIN(0.5)`                    | 0.5235987755982988 (π/6)                                  |
| `=DEGREES(ASIN(0.5))`           | 29.999999999999996 (value of π/6 converted to degrees)    |
| `=ROUND(ASIN(0.5)*180/PI(), 0)` | 30 (same as above, rounded to remove approximation error) |

## ASINH
Returns the inverse hyperbolic sine of a number, which is the value whose hyperbolic sine is the provided number.

`ASINH(number)`

##### parameters

| parameters   | type   | required | default | description     |
|--------------|--------|----------|---------|-----------------|
| number       | number | yes      | -       | Any real number |

##### example

| formula            | result            |
|--------------------|-------------------|
| `=ASINH(0)`        | 0                 |
| `=ASINH(1000)`     | 7.600902209541989 |
| `=ASINH(SINH(10))` | 10                |

## ATAN
Returns the arctangent / inverse tangent of a number, which is the angle whose tangent is the provided number.

The returned angle is in radians (between -π/2 and π/2);
to convert to degrees, use the `DEGREES` function, or multiply by `180/PI()`.

`ATAN(number)`

##### parameters

| parameters   | type   | required | default | description     |
|--------------|--------|----------|---------|-----------------|
| number       | number | yes      | -       | Any real number |

##### example

| formula                     | result                              |
|-----------------------------|-------------------------------------|
| `=ATAN(1)`                  | 0.7853981633974483 (value of π/4)   |
| `=ATAN(-1)`                 | -0.7853981633974483 (value of -π/4) |
| `=DEGREES(ATAN(-1))`        | 45 (value of π/4 in degrees)        |
| `=ROUND(TAN(ATAN(123)), 1)` | 123                                 |

## ATAN2
Returns the arctangent / inverse tangent of the specified X/Y coordinates.
This is the angle between the X-axis and a line containing the origin point (0, 0), and a point with the provided coordinates.

The returned angle is in radians (between -π and π, excluding -π);
to convert to degrees, use the `DEGREES` function, or multiply by `180/PI()`.

`ATAN2(x, y)`

##### parameters

| parameters | type   | required | default | description               |
|------------|--------|----------|---------|---------------------------|
| x          | number | yes      | -       | X-coordinate of the point |
| y          | number | yes      | -       | Y-coordinate of the point |

##### example

| formula                 | result                              |
|-------------------------|-------------------------------------|
| `=ATAN2(1, 1)`          | 0.7853981633974483 (value of π/4)   |
| `=ATAN2(1, -1)`         | -0.7853981633974483 (value of -π/4) |
| `=DEGREES(ATAN2(1, 1))` | 45 (value of π/4 in degrees)        |
| `=ATAN2(1, 1)*180/PI()` | 45                                  |

## ATANH
Returns the inverse hyperbolic tangent of a number, which is the value whose hyperbolic tangent is the provided number.

`ATANH(number)`

##### parameters

| parameters   | type   | required | default | description                                     |
|--------------|--------|----------|---------|-------------------------------------------------|
| number       | number | yes      | -       | Number between -1 and 1, but excluding -1 and 1 |

##### example

| formula                     | result             |
|-----------------------------|--------------------|
| `=ATANH(0)`                 | 0                  |
| `=ATANH(0.5)`               | 0.5493061443340549 |
| `=ROUND(ATANH(TANH(3)), 1)` | 3                  |

## CEILING
Rounds up a number to the next multiple of the provided significance.

`CEILING(number, significance)`

##### parameters

| parameters   | type   | required | default | description             |
|--------------|--------|----------|---------|-------------------------|
| number       | number | yes      | -       | Number to round up      |
| significance | number | yes      | -       | Multiple to round up to |

##### example

| formula                       | result |
|-------------------------------|--------|
| `=CEILING(0.3, 1)`            | 1      |
| `=CEILING(1, 1)`              | -1     |
| `=CEILING(-0.79, 0.5)`        | -0.5   |

## COS
Returns the cosine of the given angle.

`COS(number)`

##### parameters

| parameters   | type   | required | default | description           |
|--------------|--------|----------|---------|-----------------------|
| number       | number | yes      | -       | Any angle, in radians |

##### example

| formula                       | result                                          |
|-------------------------------|-------------------------------------------------|
| `=COS(0)`                     | 1                                               |
| `=COS(PI())`                  | -1                                              |
| `=COS(RADIANS(60))`           | 0.5000000000000001 (due to approximation error) |
| `=ROUND(COS(RADIANS(60)), 8)` | 0.5                                             |

## COSH
Returns the hyperbolic cosine of a number.

`COSH(number)`

##### parameters

| parameters   | type   | required | default | description     |
|--------------|--------|----------|---------|-----------------|
| number       | number | yes      | -       | Any real number |

##### example

| formula      | result            |
|--------------|-------------------|
| `=COSH(0)`   | 1                 |
| `=COSH(-13)` | 221206.6960055904 |

## COT
Returns the cotangent of the given angle.

`COT(number)`

##### parameters

| parameters   | type   | required | default | description                    |
|--------------|--------|----------|---------|--------------------------------|
| number       | number | yes      | -       | Any non-zero angle, in radians |

##### example

| formula                       | result |
|-------------------------------|--------|
| `=ROUND(COT(PI()/4), 3)`      | 1      |
| `=ROUND(COT(RADIANS(60)), 3)` | 0.577  |

## COTH
Returns the hyperbolic cotangent of a number.

`COTH(number)`

##### parameters

| parameters   | type   | required | default | description              |
|--------------|--------|----------|---------|--------------------------|
| number       | number | yes      | -       | Any non-zero real number |

##### example

| formula                 | result        |
|-------------------------|---------------|
| `=ROUND(COTH(1), 3)`    | 1.313         |
| `=ROUND(COTH(-10), 10)` | -1.0000000041 |

## CSC
Returns the cosecant of the given angle.

As this is defined as `1/SIN(number)`, the expression `SIN(number)` cannot evaluate to zero.
As such, zero and multiples of π will result in an error due to a division by zero.

`CSC(number)`

##### parameters

| parameters   | type   | required | default | description                                              |
|--------------|--------|----------|---------|----------------------------------------------------------|
| number       | number | yes      | -       | Any angle, in radians, that is not 0 nor a multiple of π |

##### example

| formula                       | result |
|-------------------------------|--------|
| `=ROUND(CSC(PI()/6), 3)`      | 2      |
| `=ROUND(CSC(RADIANS(90)), 3)` | 1      |

## CSCH
Returns the hyperbolic cosecant of a number.

`CSCH(number)`

##### parameters

| parameters   | type   | required | default | description              |
|--------------|--------|----------|---------|--------------------------|
| number       | number | yes      | -       | Any non-zero real number |

##### example

| formula               | result |
|-----------------------|--------|
| `=ROUND(CSCH(1), 3)`  | 0.851  |
| `=ROUND(CSCH(-2), 3)` | -0.276 |

## DECIMAL
Converts a text representation of a number in a given base into a decimal (base 10) number.
The provided base must be between 2 (binary) and 36.

`DECIMAL(text, base)`

##### parameters

| parameters | type          | required | default | description                                                    |
|------------|---------------|----------|---------|----------------------------------------------------------------|
| text       | string/number | yes      | -       | Textual, case-insensitive, representation of an integer number |
| base       | integer       | yes      | -       | Base of the provided representation, between 2 and 36          |

##### example

| formula              | result |
|----------------------|--------|
| `=DECIMAL("8F", 16)` | 143    |
| `=DECIMAL(1110, 2)`  | 14     |
| `=CEILING("z", 36)`  | 35     |

## DEGREES
Converts radians into degrees.
Equivalent to `*180/PI()`.

`DEGREES(angle)`

##### parameters

| parameters | type   | required | default | description                  |
|------------|--------|----------|---------|------------------------------|
| angle      | number | yes      | -       | Angle to convert, in radians |

##### example

| formula                 | result |
|-------------------------|--------|
| `=DEGREES(-PI())`       | -180   |
| `=ROUND(DEGREES(1), 0)` | 57     |
| `=DEGREES(0)`           | 0      |

## EVEN
Rounds a number to the next even number that is away from zero.

For positive numbers, this is equivalent to `CEILING(number, 2)`;
for negative numbers, this is equivalent to `FLOOR(number, 2)`.

`EVEN(number)`

##### parameters

| parameters | type   | required | default | description |
|------------|--------|----------|---------|-------------|
| number     | number | yes      | -       | Any number  |

##### example

| formula        | result |
|----------------|--------|
| `=EVEN(1.234)` | 2      |
| `=EVEN(2.01)`  | 4      |
| `=EVEN(-3)`    | -4     |

## EXP
Returns e raised to the power of number.
e is an irrational constant representing the base of the natural logarithm, with value 2.71828182845904...

`EXP(number)`

##### parameters

| parameters | type   | required | default | description                 |
|------------|--------|----------|---------|-----------------------------|
| number     | number | yes      | -       | Exponent to apply to base e |

##### example

| formula     | result            |
|-------------|-------------------|
| `=EXP(1)`   | 2.718281828459045 |
| `=EXP(0)`   | 1                 |
| `=EXP(2.1)` | 8.166169912567652 |

## FACT
Returns the factorial of a number.

Factorials only exist for nonnegative numbers.
If the provided number is not an integer, it will be truncated to an integer before its factorial is computed.

`FACT(number)`

##### parameters

| parameters | type   | required | default | description        |
|------------|--------|----------|---------|--------------------|
| number     | number | yes      | -       | Nonnegative number |

##### example

| formula      | result |
|--------------|--------|
| `=FACT(5)`   | 120    |
| `=FACT(2.9)` | 2      |
| `=FACT(0)`   | 1      |

## FACTDOUBLE
Returns the double factorial of a number.

Factorials only exist for nonnegative numbers.
If the provided number is not an integer, it will be truncated to an integer before its factorial is computed.

`FACTDOUBLE(number)`

##### parameters

| parameters | type   | required | default | description        |
|------------|--------|----------|---------|--------------------|
| number     | number | yes      | -       | Nonnegative number |

##### example

| formula            | result |
|--------------------|--------|
| `=FACTDOUBLE(5)`   | 15     |
| `=FACTDOUBLE(2.9)` | 2      |
| `=FACTDOUBLE(0)`   | 1      |

## FLOOR
Rounds down a number to the previous multiple of the provided significance.

`FLOOR(number, significance)`

##### parameters

| parameters   | type   | required | default | description               |
|--------------|--------|----------|---------|---------------------------|
| number       | number | yes      | -       | Number to round down      |
| significance | number | yes      | -       | Multiple to round down to |

##### example

| formula              | result |
|----------------------|--------|
| `=FLOOR(0.9, 1)`     | 0      |
| `=FLOOR(-2.5, 2)`    | -4     |
| `=FLOOR(-0.79, 0.1)` | -0.8   |

## GCD
Returns the greatest common divisor of two or more integers.
This is the highest integer over which all provided integers can be divided without a remainder.

If any provided numbers are not integers, they will be truncated to integers before calculating.

`GCD(number1, [number2], ...)`

##### parameters

| parameters   | type   | required | default | description                                    |
|--------------|--------|----------|---------|------------------------------------------------|
| number1      | number | yes      | -       | Nonnegative number                             |
| number2, ... | number | no       | -       | More nonnegative numbers, up to a total of 255 |

##### example

| formula                 | result |
|-------------------------|--------|
| `=GCD(5, 4)`            | 1      |
| `=GCD(30, 60, 90, 105)` | 15     |
| `=GCD(7, 0)`            | 7      |
| `=GCD(PI())`            | 3      |

## INT
Rounds a number down to the nearest integer. This is equivalent to truncating the decimal part, if it exists.

`INT(number)`

##### parameters

| parameters | type   | required | default | description |
|------------|--------|----------|---------|-------------|
| number     | number | yes      | -       | Any number  |

##### example

| formula             | result |
|---------------------|--------|
| `=INT(6.6)`         | 6      |
| `=INT(-1.99)`       | -1     |
| `=3.14 - INT(3.14)` | 0.14   |

## LCM
Returns the least common multiple of two or more nonnegative integers.
This is the smallest positive integer that is a multiple of all provided integers.

If any provided numbers are not integers, they will be truncated to integers before calculating.

If the number 0 is provided, 0 will be returned.

`GCD(number1, [number2], ...)`

##### parameters

| parameters   | type   | required | default | description                                    |
|--------------|--------|----------|---------|------------------------------------------------|
| number1      | number | yes      | -       | Nonnegative number                             |
| number2, ... | number | no       | -       | More nonnegative numbers, up to a total of 255 |

##### example

| formula                              | result |
|--------------------------------------|--------|
| `=LCM(2, 5)`                         | 10     |
| `=LCM(1, 2, 3, 4, 5, 6, 10, 12, 15)` | 15     |
| `=LCM(7, 0)`                         | 0      |
| `=LCM(PI())`                         | 3      |

## LN
Returns the natural logarithm of a number, i.e. the logarithm based on constant e (2.71828182845904...).

`LN(number)`

##### parameters

| parameters | type   | required | default | description     |
|------------|--------|----------|---------|-----------------|
| number     | number | yes      | -       | Positive number |

##### example

| formula           | result             |
|-------------------|--------------------|
| `=LN(3)`          | 1.0986122886681098 |
| `=LN(EXP(1))`     | 1                  |
| `=LN(EXP(5))`     | 5                  |
| `=LOG10(123.456)` | 4.815884817283264  |

## LOG
Returns the logarithm of a number to the provided base.

`LOG(number, [base])`

##### parameters

| parameters | type   | required | default | description                                   |
|------------|--------|----------|---------|-----------------------------------------------|
| number     | number | yes      | -       | Positive number                               |
| base       | number | no       | 10      | Base of the logarithm, also a positive number |

##### example

| formula               | result            |
|-----------------------|-------------------|
| `=LOG(10)`            | 1                 |
| `=LOG(10, 10)`        | 1                 |
| `=LOG(32, 2)`         | 5                 |
| `=LOG(123.456, 3.14)` | 4.208869826417803 |

## LOG10
Returns the base-10 logarithm of a number.

`LOG10(number)`

##### parameters

| parameters | type   | required | default | description     |
|------------|--------|----------|---------|-----------------|
| number     | number | yes      | -       | Positive number |

##### example

| formula           | result             |
|-------------------|--------------------|
| `=LOG10(10)`      | 1                  |
| `=LOG10(1000)`    | 3                  |
| `=LOG10(123.456)` | 2.0915122016277716 |

## MOD
Returns the remainder after dividing a number by a divisor.
The result will always have the same sign as the divisor.

`MOD(number, divisor)`

##### parameters

| parameters | type   | required | default | description                        |
|------------|--------|----------|---------|------------------------------------|
| number     | number | yes      | -       | Number to find the remainder of    |
| divisor    | number | yes      | -       | Non-zero number by which to divide |

##### example

| formula        | result |
|----------------|--------|
| `=MOD(3, 2)`   | 1      |
| `=MOD(-3, 2)`  | 1      |
| `=MOD(3, -2)`  | -1     |
| `=MOD(-3, -2)` | -1     |

## MROUND
Rounds a number to the desired multiple.
Both arguments must have the same sign.

`MROUND(number, multiple)`

##### parameters

| parameters | type   | required | default | description          |
|------------|--------|----------|---------|----------------------|
| number     | number | yes      | -       | Value to round       |
| multiple   | number | yes      | -       | Multiple to round to |

##### example

| formula                | result |
|------------------------|--------|
| `=MROUND(10.5, 3)`     | 12     |
| `=MROUND(-PI(), -0.1)` | -3.1   |
| `=MROUND(PI(), 0)`     | 0      |

## ODD
Rounds a number to the next odd number that is away from zero.

For positive numbers, this is equivalent to `CEILING(number+1, 2) - 1`;
for negative numbers, this is equivalent to `FLOOR(number-1, 2) + 1`.

`ODD(number)`

##### parameters

| parameters | type   | required | default | description |
|------------|--------|----------|---------|-------------|
| number     | number | yes      | -       | Any number  |

##### example

| formula       | result |
|---------------|--------|
| `=ODD(2.234)` | 3      |
| `=ODD(1.01)`  | 3      |
| `=ODD(-4)`    | -5     |

## PI
Returns the value of constant π, accurate to 15 decimal places.

`PI()`

##### parameters

This function has no parameters.

##### example

| formula | result            |
|---------|-------------------|
| `=PI()` | 3.141592653589793 |

## POWER
Returns the result of a number raised to a power.

This operation is equivalent to the usage of the `^` operator: `POWER(2, 4)` is equivalent to `2^4`.

`POWER(number, exponent)`

##### parameters

| parameters | type   | required | default | description |
|------------|--------|----------|---------|-------------|
| number     | number | yes      | -       | Base number |
| exponent   | number | yes      | -       | Exponent    |

##### example

| formula              | result |
|----------------------|--------|
| `=POWER(2, 4)`       | 16     |
| `=POWER(2, 4) = 2^4` | true   |
| `=POWER(9, 1/2)`     | 3      |
| `=POWER(4, -1/2)`    | 0.5    |

## PRODUCT
Returns the result of the multiplication of the provided numbers.

This function and the multiplication operator `*` are equivalent.

`PRODUCT(number1, [number2], ...)`

##### parameters

| parameters   | type   | required | default | description                               |
|--------------|--------|----------|---------|-------------------------------------------|
| number1      | number | yes      | -       | Any number                                |
| number2, ... | number | no       | -       | Additional numbers, up to a total of 255  |

##### example

| formula                         | result |
|---------------------------------|--------|
| `=PRODUCT(2, 3, 4)`             | 24     |
| `=PRODUCT(2, 3, 4) = 2 * 3 * 4` | true   |
| `=PRODUCT(10, -0.3)`            | -3     |
| `=PRODUCT(2)`                   | 2      |

## RADIANS
Converts degrees into radians.
Equivalent to `*PI()/180`.

`RADIANS(angle)`

##### parameters

| parameters | type   | required | default | description                  |
|------------|--------|----------|---------|------------------------------|
| angle      | number | yes      | -       | Angle to convert, in degrees |

##### example

| formula              | result                         |
|----------------------|--------------------------------|
| `=RADIANS(180)`      | 3.141592653589793 (value of π) |
| `=RADIANS(0)`        | 0                              |
| `=RADIANS(270/PI())` | 1.5                            |

## RAND
Returns a random number between 0 and 1, excluding 1.

`RAND()`

##### parameters

This function has no parameters.

##### example


| formula         | result                                    |
|-----------------|-------------------------------------------|
| `=RAND()`       | `variable (returns x where 0 <= x < 1)`   |
| `=RAND() * 100` | `variable (returns x where 0 <= x < 100)` |


## RANDBETWEEN
Returns a random number between two provided values, including the provided values.

`RANDBETWEEN(min, max)`

##### parameters

| parameters | type   | required | default | description                                                 |
|------------|--------|----------|---------|-------------------------------------------------------------|
| min        | number | yes      | -       | Minimum value in the interval                               |
| max        | number | yes      | -       | Maximum value in the interval. Must not be lower than `min` |

##### example

| formula                    | result                                   |
|----------------------------|------------------------------------------|
| `=RANDBETWEEN(1, 2)`       | `variable (returns x where 1 <= x <= 2)`   |
| `=RANDBETWEEN(0, 100)`     | `variable (returns x where 0 <= x <= 100)` |
| `=RANDBETWEEN(1.23, 1.23)` | 1.23                                     |

## ROMAN
Returns the Roman numeral corresponding to the provided Arabic numeral.

If the number 0 is provided, an empty string will be returned

`ROMAN(number, [form])`

##### parameters

| parameters | type    | required | default | description                                                                                         |
|------------|---------|----------|---------|-----------------------------------------------------------------------------------------------------|
| number     | number  | yes      | -       | Nonnegative number                                                                                  |
| form       | integer | yes      | -       | One of the following: 0 (classic), 1, 2, 3, 4 (most simplified), in increasing levels of simplicity |

##### example

| formula                    | result         |
|----------------------------|----------------|
| `=ROMAN(499)`              | CDXCIX         |
| `=ROMAN(499, 0)`           | CDXCIX         |
| `=ROMAN(499, 1)`           | LDVLIV         |
| `=ROMAN(499, 2)`           | XDIX           |
| `=ROMAN(499, 3)`           | VDIV           |
| `=ROMAN(499, 4)`           | ID             |
| `=ROMAN(ARABIC("MMXXIV"))` | 2024           |
| `=ROMAN(0)`                | (empty string) |


## ROUND
Rounds a number to a specified number of digits.

`ROUND(number, [num_digits])`

##### parameters

| parameters | type    | required | default | description                                                                                                  |
|------------|---------|----------|---------|--------------------------------------------------------------------------------------------------------------|
| number     | number  | yes      | -       | Any number                                                                                                   |
| num_digits | integer | no       | 0       | Number of digits to round the provided number to. By default, this is 0, which rounds to the nearest integer |

##### example

| formula                 | result |
|-------------------------|--------|
| `=ROUND(123.456, 2)`    | 123.46 |
| `=ROUND(123.456, 1)`    | 123.5  |
| `=ROUND(123.456, 0)`    | 123    |
| `=ROUND(123.456, -1)`   | 120    |
| `=ROUND(123.456, -2)`   | 100    |
| `=ROUND(123.456, -2.9)` | 100    |

## ROUNDDOWN
Rounds down (toward zero) a number to a specified number of digits.

This is analogous to the `ROUND` function, but it always rounds down toward zero.

`ROUNDDOWN(number, num_digits)`

##### parameters

| parameters | type    | required | default | description                                      |
|------------|---------|----------|---------|--------------------------------------------------|
| number     | number  | yes      | -       | Any number                                       |
| num_digits | integer | yes      | -       | Number of digits to round the provided number to |

##### example

| formula                  | result |
|--------------------------|--------|
| `=ROUNDDOWN(321.654, 2)` | 321.65 |
| `=ROUNDDOWN(321.654, 1)` | 321.6  |
| `=ROUND(321.654, 0)`     | 321    |
| `=ROUND(321.654, -1)`    | 320    |
| `=ROUND(321.654, -2.9)`  | 300    |
| `=ROUND(-3.9, 0)`        | -3     |

## ROUNDUP
Rounds up (away from zero) a number to a specified number of digits.

This is analogous to the `ROUND` function, but it always rounds up toward zero.

`ROUNDUP(number, num_digits)`

##### parameters

| parameters | type    | required | default | description                                      |
|------------|---------|----------|---------|--------------------------------------------------|
| number     | number  | yes      | -       | Any number                                       |
| num_digits | integer | yes      | -       | Number of digits to round the provided number to |

##### example

| formula                   | result |
|---------------------------|--------|
| `=ROUNDUP(321.654, 2)`    | 321.66 |
| `=ROUNDUP(321.654, 1)`    | 321.7  |
| `=ROUNDUP(321.654, 0)`    | 322    |
| `=ROUNDUP(321.654, -1)`   | 330    |
| `=ROUNDUP(321.654, -2.9)` | 400    |
| `=ROUNDUP(-3.9, 0)`       | -4     |

## SEC
Returns the secant of the given angle.

As this is defined as `1/COS(number)`, the expression `COS(number)` cannot evaluate to zero.
As such, any number that is a multiple of π/2 but not π (-π/2, π/2, 3π/2, ...) will result in an error due to a division by zero.

`SEC(number)`

##### parameters

| parameters   | type   | required | default | description                                     |
|--------------|--------|----------|---------|-------------------------------------------------|
| number       | number | yes      | -       | Any angle, in radians, whose cosine is not zero |

##### example

| formula                       | result |
|-------------------------------|--------|
| `=SEC(0)`                     | 1      |
| `=SEC(-PI())`                 | -1     |
| `=ROUND(SEC(RADIANS(60)), 3)` | 2      |

## SECH
Returns the hyperbolic secant of a number.

`SECH(number)`

##### parameters

| parameters   | type   | required | default | description            |
|--------------|--------|----------|---------|------------------------|
| number       | number | yes      | -       | Any real number |

##### example

| formula              | result |
|----------------------|--------|
| `=SECH(0)`           | 1      |
| `=ROUND(SECH(2), 3)` | 0.266  |

## SIGN
Returns:
- 1 if the provided number is positive
- 0 if the provided number is zero
- -1 if the provided number is negative

`SIGN(number)`

##### parameters

| parameters   | type   | required | default | description     |
|--------------|--------|----------|---------|-----------------|
| number       | number | yes      | -       | Any real number |

##### example

| formula       | result |
|---------------|--------|
| `=SIGN(0.01)` | 1      |
| `=SIGN(0)`    | 0      |
| `=SIGN(-7)`   | -1     |

## SIN
Returns the sine of the given angle.

`SIN(number)`

##### parameters

| parameters   | type   | required | default | description           |
|--------------|--------|----------|---------|-----------------------|
| number       | number | yes      | -       | Any angle, in radians |

##### example

| formula                        | result                                          |
|--------------------------------|-------------------------------------------------|
| `=SIN(0)`                      | 1                                               |
| `=SIN(PI()/2)`                 | 90                                              |
| `=SIN(RADIANS(30))`            | 0.49999999999999994 (due to approximation error) |
| `=ROUND(COS(RADIANS(330)), 8)` | 0.5                                             |

## SINH
Returns the hyperbolic sine of a number.

`SINH(number)`

##### parameters

| parameters   | type   | required | default | description     |
|--------------|--------|----------|---------|-----------------|
| number       | number | yes      | -       | Any real number |

##### example

| formula                | result    |
|------------------------|-----------|
| `=SINH(0)`             | 0         |
| `=ROUND(SINH(-13), 1)` | -221206.7 |

## SQRT
Returns a positive square root.

This is equivalent to using `POWER(number, 1/2)` or `number ^ 0.5`.

`SQRT(number)`

##### parameters

| parameters   | type   | required | default | description                 |
|--------------|--------|----------|---------|-----------------------------|
| number       | number | yes      | -       | Any real nonnegative number |

##### example

| formula    | result |
|------------|--------|
| `=SQRT(9)` | 3      |
| `=SQRT(1)` | 1      |
| `=SQRT(0)` | 0      |

## SQRTPI
Returns the positive square root of a number multiplied by π.

This is equivalent to using `POWER(number * PI(), 1/2)` or `SQRT(number * PI())`.

`SQRTPI(number)`

##### parameters

| parameters   | type   | required | default | description                 |
|--------------|--------|----------|---------|-----------------------------|
| number       | number | yes      | -       | Any real nonnegative number |

##### example

| formula                       | result                         |
|-------------------------------|--------------------------------|
| `=SQRTPI(10)`                 | 5.604991216397929              |
| `=SQRTPI(PI())`               | 3.141592653589793 (value of π) |
| `=SQRTPI(10) = SQRT(10*PI())` | true                           |

## SUM
Adds all provided values.

Can be used in our rule engine with a reference to a column name, i.e.: `SUM([quote_ctx.Sections-1.0.custom_columns.Price])`.

`SUM(number1, [number2], ...)`

##### parameters

| parameters   | type   | required | default | description                        |
|--------------|--------|----------|---------|------------------------------------|
| number1      | number | yes      | -       | Number                             |
| number2, ... | number | no       | -       | More numbers, up to a total of 255 |

##### example

| formula                 | result |
|-------------------------|--------|
| `=SUM(5, 4)`            | 9      |
| `=SUM(30, 60, 90, 105)` | 285    |
| `=SUM(-1.1)`            | -1.1   |

## SUMIF
Adds values in a provided range that meet provided criteria.

`SUMIF(range, criteria, [sum_range])`

##### parameters

| parameters | type                                                              | required | default | description                                                                                                                                |
|------------|-------------------------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------|
| range      | array of numbers (other types allowed if `sum_range` is provided) | yes      | -       | Array of at least one number (or reference to a column containing numbers. Non-numbered values are ignored, unless `sum_range` is provided |
| criteria   | number/text/function                                              | yes      | -       | An expression that each number is evaluated against. If it evaluates to true, the number (or its equivalent in `sum_range`) will be added  |
| sum_range  | array of numbers                                                  | no       | -       | Array of numbers. Its length must exactly match `range`'s length                                                                           |

##### example

| formula                                                     | result | description                                                                                                                               |
|-------------------------------------------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `=SUMIF({1, 2, "c", 4}, ">0")`                              | 7      | `1`, `2`, `4` meet criteria of being greater than 0. `"c"` is ignored                                                                     |
| `=SUMIF({1, 2, 3}, ">1", {3, 6, 9})`                        | 285    | `2` and `3` meet criteria of being greater than 1. As such, the same positions in `sum_range`, which have values `6` and `9`, are added   |
| `=SUMIF({100, 0, 100, 100, 9}, 100, {1, 2, 3, 4, 5})`       | 8      | The first, third and fourth positions meet criteria of being equal to 100. As such, values at the same positions in `sum_range` are added |
| `=SUMIF({"lemon", "apple", "melon"}, "*on", {0.5, 0.6, 3})` | 3.5    | `"lemon"` and `"melon"` end with "on". As such, the same positions in `sum_range`, which have values `0.5` and `3`, are added             |
| `=SUMIF({1, 2, 3, 4, 5}, EVEN)`                             |        |                                                                                                                                           |

## SUMPRODUCT
Adds the sum of the products of corresponding ranges.

Arithmetic operations other than the default product are allowed, by replacing the comma with the desired arithmetic operator.
For instance, to add the sum of the subtractions of two corresponding arrays: `=SUMPRODUCT(array1 - array2)`.

`SUMPRODUCT(array1, [array2], ...)`

##### parameters

| parameters  | type             | required | default | description                                 |
|-------------|------------------|----------|---------|---------------------------------------------|
| array1      | array of numbers | yes      | -       | Array of numbers                            |
| array2, ... | array of numbers | no       | -       | More arrays of numbers, with the same length |

##### example

| formula                                           | result | equivalent arithmetic expression |
|---------------------------------------------------|--------|----------------------------------|
| `=SUMPRODUCT({1, 2}, {3, 4})`                     | 11     | `(1*3)+(2*4)`                    |
| `=SUMPRODUCT({1, 2} - {3, 4})`                    | -4     | `(1-3)+(2-4)`                    |
| `=SUMPRODUCT({10, 20, 0} / {2, 4, 2}, {3, 3, 3})` | 30     | `(10/2*3)+(20/4*3)+(0/2*3)`      |

## TAN
Returns the tangent of the given angle.

Angles that are multiples of π/2 but not π (-π/2, π/2, 3π/2, ...) do not have a defined tangent and providing one of these will result in an error due to a division by zero.

`TAN(number)`

##### parameters

| parameters   | type   | required | default | description                                     |
|--------------|--------|----------|---------|-------------------------------------------------|
| number       | number | yes      | -       | Any angle, in radians, whose tangent is defined |

##### example

| formula                        | result |
|--------------------------------|--------|
| `=TAN(0)`                      | 0      |
| `=ROUND(TAN(RADIANS(45)), 3)`  | 1      |
| `=ROUND(TAN(RADIANS(-60)), 3)` | -1.732 |

## TANH
Returns the hyperbolic tangent of a number.

`TANH(number)`

##### parameters

| parameters   | type   | required | default | description     |
|--------------|--------|----------|---------|-----------------|
| number       | number | yes      | -       | Any real number |

##### example

| formula               | result |
|-----------------------|--------|
| `=TANH(0)`            | 0      |
| `=ROUND(CSCH(-2), 3)` | 0.964  |

## TRUNC
Truncates a number by removing its fractional part.

By default, this function truncates to an integer (`num_digits` = 0).

A positive `num_digits` indicates that the final number will be truncated to no more than the specified number of decimal places.

A negative `num_digits` indicates that the final number will be rounded down to the specified number of digits left of the decimal point.

`TRUNC(number, [num_digits])`

##### parameters

| parameters | type   | required | default | description                                                                       |
|------------|--------|----------|---------|-----------------------------------------------------------------------------------|
| number     | number | yes      | -       | Any number                                                                        |
| num_digits | number | no       | 0       | Number specifying the precision of the truncation. Any fractional part is ignored |

##### example

| formula                 | result |
|-------------------------|--------|
| `=TRUNC(987.65)`        | 987    |
| `=TRUNC(987.65, 0)`     | 987    |
| `=TRUNC(987.65, 1)`     | 987.6  |
| `=TRUNC(987.65, 8)`     | 987.65 |
| `=TRUNC(987.65, -2)`    | 900    |
| `=TRUNC(987.65, -2.66)` | 900    |
