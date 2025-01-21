# Date and Time Functions


### Important Note  

The **DATE** group functions can work with dates written in **ISO format** (e.g., `2025-01-21`). However, by default, they use a different format, commonly referred to as the "Excel date format," which is **not the same as ISO format** or a timestamp.  

#### How to Convert Dates to ISO Format  

To convert a date into ISO format, use the **TEXT** function and specify the desired format.  

**Example:**  
To convert the current date and time into ISO format, use this formula:  
```excel
=TEXT(NOW(), "yyyy-mm-ddThh:MM:ss")
```

---

## DATE
The `DATE` function combines three separate values to form a date.

```excel
DATE(year,month,day)
```

##### Example
```excel
=TEXT(DATE(2008,1,1), "yyyy-mm-dd")
```

##### Return Value
```excel
"2008-01-01"
```

---

## DATEVALUE
The `DATEVALUE` function converts a date stored as text into the "Excel date format."

```excel
DATEVALUE(date_text)
```

##### Example
```excel
=DATEVALUE("1/1/2008")
```

##### Return Value
```excel
39448
```

---

## DAY
Returns the day of a date (1 to 31).

```excel
DAY(date)
```

##### Example
```excel
=DAY(DATEVALUE("1/1/2008"))
```

##### Return Value
```excel
1
```

---

## MONTH
Returns the month of a date (1 to 12).

```excel
MONTH(date)
```

##### Example
```excel
=MONTH(DATEVALUE("1/1/2008"))
```

##### Return Value
```excel
1
```

---

## YEAR
Returns the year corresponding to a date (1900–9999).

```excel
YEAR(date)
```

##### Example
```excel
=YEAR(DATEVALUE("1/1/2008"))
```

##### Return Value
```excel
2008
```

---

## WEEKDAY
Returns the day of the week corresponding to a date.

```excel
WEEKDAY(date, return_type)
```

##### Parameters

| Parameter    | Type     | Required | Default | Description                                        |
|--------------|----------|----------|---------|----------------------------------------------------|
| date         | datetime | yes      | -       | The input date.                                   |
| return_type  | int      | no       | 1       | Specifies the numbering system for days of the week. |

##### Return Types

| Return_type | Numbers Returned                                     |
|-------------|------------------------------------------------------|
| 1 or omitted | 1 (Sunday) through 7 (Saturday).                   |
| 2           | 1 (Monday) through 7 (Sunday).                     |
| 3           | 0 (Monday) through 6 (Sunday).                     |

##### Example
```excel
=WEEKDAY(DATEVALUE("1/1/2008"))
```

##### Return Value
```excel
3
```

---

## WEEKNUM
Returns the week number of a specific date.

```excel
WEEKNUM(date, return_type)
```

##### Parameters

| Parameter    | Type     | Required | Default | Description                                         |
|--------------|----------|----------|---------|-----------------------------------------------------|
| date         | datetime | yes      | -       | The input date.                                    |
| return_type  | int      | no       | 1       | Determines the start day of the week.             |

##### Example
```excel
=WEEKNUM(DATEVALUE("1/1/2008"))
```

##### Return Value
```excel
1
```

---

## TIME
Returns the decimal number for a particular time.

```excel
TIME(hour, minute, second)
```

##### Example
```excel
=TIME(23, 54, 19)
```

##### Return Value
Decimal value of the time.

---

## TIMEVALUE
Returns the decimal number of the time represented by a text string.

```excel
TIMEVALUE(time_text)
```

##### Example
```excel
=TIMEVALUE("11:54:19 PM")
```

##### Return Value
Decimal value of the time.

---

## SECOND
Returns the seconds of a time value.

```excel
SECOND(time)
```

---

## MINUTE
Returns the minutes of a time value.

```excel
MINUTE(time)
```

---

## HOUR
Returns the hour of a time value.

```excel
HOUR(time)
```

---

## NOW
Returns the current date and time. Supports date offsets.

```excel
=NOW()       // Current datetime
=NOW() + 1   // Now + 1 day
=NOW() - 1   // Now - 1 day
```

---

## TODAY
Returns the current date. Supports date offsets.

```excel
=TODAY()       // Current date
=TODAY() + 1   // Today + 1 day
=TODAY() - 1   // Today - 1 day
```

---

## YEARFRAC
Calculates the fraction of the year represented by the number of whole days between two dates.

```excel
YEARFRAC(start_date, end_date, [basis])
```

##### Parameters

| Parameter    | Type     | Required | Default | Description                         |
|--------------|----------|----------|---------|-------------------------------------|
| start_date   | datetime | yes      | -       | A date representing the start date. |
| end_date     | datetime | yes      | -       | A date representing the end date.   |
| basis        | int      | no       | 0       | The type of day count basis to use. |

##### Example
```excel
=ROUND(YEARFRAC(DATE(2024,1,1), DATE(2025,9,1), 4))
```

##### Return Value
```excel
2
```

---

## EDATE
Calculates maturity dates or due dates falling on the same day of the month as the start date.

```excel
EDATE(start_date, months)
```

##### Example
```excel
=TEXT(EDATE(DATE(2024,1,1), 12), "yyyy-mm-dd")
```

##### Return Value
```excel
"2025-01-01"
```

---

## DATEDIF
Calculates the number of days, months, or years between two dates.

```excel
DATEDIF(start_date, end_date, Unit)
```

##### Parameters

| Parameter    | Type     | Required | Description                                                           |
|--------------|----------|----------|-----------------------------------------------------------------------|
| start_date   | datetime | yes      | A date representing the starting date of a given period.             |
| end_date     | datetime | yes      | A date representing the ending date of the period.                   |
| Unit         | string   | yes      | The type of information to return.                                   |

##### Units

| Unit  | Description                              |
|-------|------------------------------------------|
| "Y"   | Complete years in the period.           |
| "M"   | Complete months in the period.          |
| "D"   | Total days in the period.               |

##### Example
```excel
=DATEDIF(DATE(2024,1,1), DATE(2025,1,1), "M")
```

##### Return Value
```excel
12
```
