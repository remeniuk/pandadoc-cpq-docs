# Text functions


## FIND
Finds one text string (find_text) within another text string (within_text), and returns the number of the starting position of find_text, from the first character of within_text. You can also use SEARCH to find one text string within another, but unlike SEARCH, FIND is case sensitive and doesn't allow wildcard characters.

`FIND(find_text,within_text,start_num)`

##### parameters

| parameters  | type | required | default | description                                                                                                                                                    |
|-------------|------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| find_text   | str  | yes      | -       | is the text you want to find                                                                                                                                   |
| within_text | str  | yes      | -       | is the text containing the text you want to find                                                                                                               |
| start_num   | int  | no       | 1       | specifies the character at which to start the search. The first character in within_text is character number 1. If you omit start_num, it is assumed to be 1.  |

##### example
| formula                                       | result    |
|-----------------------------------------------|-----------|
| `=FIND("m","Miriam McGovern")`                | `6`       |

## LEN
LEN returns the number of characters in a text string.

`LEN(text)`

##### example
| formula                                       | result    |
|-----------------------------------------------|-----------|
| `=LEN("123")`                                 | `3`       |

## MID
MID returns a specific number of characters from a text string, starting at the position you specify, based on the number of characters you specify.

`MID(text,start_num,num_chars)`

##### parameters

| parameters  | type | required | default | description                                                                                                                 |
|-------------|------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------|
| text   | str  | yes      | -       | is the text string containing the characters you want to extract.                                                           |
| start_num | int  | yes      | -       | is the position of the first character you want to extract in text. The first character in text has start_num 1, and so on. |
| num_chars   | int  | yes       | -       | specifies the number of characters you want MID to return from text.                                                        |

##### example
| formula                                       | result    |
|-----------------------------------------------|-----------|
| `=MID("... SKU: M64223 ...", FIND("M642", "... SKU: M64223 ..."), 6)` | `M64223`  |

## REPLACE
REPLACE replaces part of a text string, based on the number of characters you specify, with a different text string.

`REPLACE(old_text, start_num, num_chars, new_text)`

##### parameters

| parameters  | type | required | default | description                                                                           |
|-------------|------|----------|---------|---------------------------------------------------------------------------------------|
| old_text   | str  | yes      | -       | Text in which you want to replace some characters                                     |
| start_num | int  | yes      | -       | The position of the character in old_text that you want to replace with new_text.     |
| num_chars   | int  | yes       | -       | The number of characters in old_text that you want REPLACE to replace with new_text.  |
| new_text   | str  | yes       | -       | The text that will replace characters in old_text                                     |

##### example
| formula                                       | result    |
|-----------------------------------------------|-----------|
| `=REPLACE("ABCdefGHI", 4, 3, "DEF")`          | `ABCDEFGHI` |

## TRIM
Removes all spaces from text except for single spaces between words. Use TRIM on text that you have received from another application that may have irregular spacing.

`TRIM(text)`

##### example
| formula                                       | result    |
|-----------------------------------------------|-----------|
| `=TRIM("   ABC   ")`                          | `ABC`     |

## LOWER
Converts all uppercase letters in a text string to lowercase.

`LOWER(text)`

##### example
| formula                                       | result    |
|-----------------------------------------------|-----------|
| `=LOWER("ABC")`                               | `abc`     |

## UPPER
Converts text to uppercase.

`UPPER(text)`

##### example
| formula                                       | result    |
|-----------------------------------------------|-----------|
| `=UPPER("abc")`                               | `ABC`     |

## SEARCH
SEARCH returns the number of the character at which a specific character or text string is first found, beginning with start_num. Use SEARCH to determine the location of a character or text string within another text string so that you can use the MID or REPLACE functions to change the text.

`SEARCH(find_text,within_text,start_num)`

##### example
| formula                                       | result    |
|-----------------------------------------------|-----------|
| `=SEARCH("m642", "... SKU: M64223 ...")`      | `10`      |

## VALUE
Converts a text string that represents a number to a number.

`VALUE(text)`

##### example
| formula                                       | result    |
|-----------------------------------------------|-----------|
| `=VALUE("123")`                               | `123`     |

## TEXT
The TEXT function lets you change the way a number appears by applying formatting to it with format codes. It's useful
in situations where you want to display numbers in a more readable format, or you want to combine numbers with text or
symbols.

`TEXT(Value you want to format, "Format code you want to apply")`

| example                               | result          |
|---------------------------------------|-----------------|
| `TEXT(0.285, "0.0%")`                 | `"28.5%"`       |
| `TEXT(DATE(2024,1,1), "yyyy-mm-dd")`  | `"2024-01-01"`  |
| `TEXT(DATE(2024,1,1), "DDDD")`        | `"Monday"`      |

##### Known Bugs

- [TEXT operator incorrectly formats minutes](https://pandadoc.atlassian.net/browse/PD-61584)

##### example
| formula                                       | result    |
|-----------------------------------------------|-----------|
| `=TEXT(DATE(2024,1,1), "yyyy-mm-dd")`        | `2024-01-01` |

## RIGHT
RIGHT returns the last character or characters in a text string, based on the number of characters you specify.

`RIGHT(text,[num_chars])`

##### parameters

| parameters | type | required | default | description |
|------------|------|----------|---------|-------------|
| text       | str  | yes      | -       |             |
| num_chars  | int  | no       | 1       |             |

##### example

| formula                                       | result    |
|-----------------------------------------------|-----------|
| `=RIGHT("USB", 2)`                            | `SB`      |

## LEFT
Returns the first character or characters in a text string, based on the number of characters you specify

`LEFT(text, [num_chars])`

##### parameters

| parameters | type | required | default | description |
|------------|------|----------|---------|-------------|
| text       | str  | yes      | -       |             |
| num_chars  | int  | no       | 1       |             |

##### example

| formula                                       | result    |
|-----------------------------------------------|-----------|
| `=LEFT("USB", 2)`                             | `US`      |

## CONCAT
The CONCAT function combines the text from multiple ranges and/or strings, but it doesn't provide delimiter or IgnoreEmpty arguments.

CONCAT replaces the [CONCATENATE][2] function.

## CONCATENATE

Use CONCATENATE to join two or more text strings into one string.

`CONCATENATE(text1, [text2], ...)`

##### parameters

| parameters | type | required | default | description |
|------------|------|----------|---------|-------------|
| text1      | str  | yes      | -       |             |
| text2      | str  | no       |         |             |

##### example

| formula                                       | result    |
|-----------------------------------------------|-----------|
| `=CONCATENATE([item_ctx.name], " ", "test")`   | `name test`|

## TEXTJOIN

The TEXTJOIN function combines the text from multiple ranges and/or strings, and includes a delimiter you specify between each text value that will be combined.

```
TEXTJOIN(delimiter, ignore_empty, text1, <text2>, ...)
TEXTJOIN(delimiter, ignore_empty, [text1])
```

##### parameters

| parameters   | type          | required | default | description                    |
|--------------|---------------|----------|---------|--------------------------------|
| delimiter    | str           | yes      | -       | A text string.                 |
| ignore_empty | bool          | yes      | -       | If TRUE, ignores empty values. |
| text1        | str/reference | yes      | -       | string or reference            |
| text2        | str           | no       | -       | string if text1 is string also |

##### example

| formula                                       | result    |
|-----------------------------------------------|-----------|
| `=TEXTJOIN(", ", TRUE, [item_ctx.name])`      | `a, b, c` |

## FMTCURR

Formats the provided value using the provided currency and formatting configuration.

```
=FMTCURR(<price_value>, <currency_code>, <currency_formatting_object_ref>)
```

##### parameters

| parameters                    | type      | required | default | description                           |
|-------------------------------|-----------|----------|---------|---------------------------------------|
| price_value                   | numeric   | yes      | -       | Formatted value.                      |
| currency_code                 | str       | yes      | -       | Currency code.                        |
| currency_formatting_object_ref| reference | yes      | -       | A reference to currency format object.|

##### example

| formula                                       | result    |
|-----------------------------------------------|-----------|
| `=FMTCURR(123.1, "USD", [quote_ctx.quote.settings.currency_formatting])` | `123.1 USD` |
