i18n_register({
    "plural": function (n) {
        return n == 1 ? 0 : 1;
    }, "catalog": {}
});

var _i18n_locale = {
    "date_formats": {
        "medium": {
            "pattern": "MMM d, yyyy",
            "format": "%(MMM)s %(d)s, %(yyyy)s"
        },
        "full": {
            "pattern": "EEEE, MMMM d, yyyy",
            "format": "%(EEEE)s, %(MMMM)s %(d)s, %(yyyy)s"
        },
        "long": {
            "pattern": "MMMM d, yyyy",
            "format": "%(MMMM)s %(d)s, %(yyyy)s"
        },
        "short": {
            "pattern": "M/d/yy",
            "format": "%(M)s/%(d)s/%(yy)s"
        }
    },
    "scientific_format": "#E0",
    "exp_symbol": "E",
    "eras": {
        "wide": {
            "0": "Before Christ",
            "1": "Anno Domini"
        },
        "abbreviated": {
            "0": "BC",
            "1": "AD"
        },
        "narrow": {
            "0": "B",
            "1": "A"
        }
    },
    "decimal_symbol": ".",
    "months": {
        "stand-alone": {
            "wide": {
                "1": "January",
                "2": "February",
                "3": "March",
                "4": "April",
                "5": "May",
                "6": "June",
                "7": "July",
                "8": "August",
                "9": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            },
            "abbreviated": {
                "1": "January",
                "2": "February",
                "3": "March",
                "4": "April",
                "5": "May",
                "6": "June",
                "7": "July",
                "8": "August",
                "9": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            },
            "narrow": {
                "1": "J",
                "2": "F",
                "3": "M",
                "4": "A",
                "5": "M",
                "6": "J",
                "7": "J",
                "8": "A",
                "9": "S",
                "10": "O",
                "11": "N",
                "12": "D"
            }
        },
        "format": {
            "wide": {
                "1": "January",
                "2": "February",
                "3": "March",
                "4": "April",
                "5": "May",
                "6": "June",
                "7": "July",
                "8": "August",
                "9": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            },
            "abbreviated": {
                "1": "Jan",
                "2": "Feb",
                "3": "Mar",
                "4": "Apr",
                "5": "May",
                "6": "Jun",
                "7": "Jul",
                "8": "Aug",
                "9": "Sep",
                "10": "Oct",
                "11": "Nov",
                "12": "Dec"
            },
            "narrow": {
                "1": "J",
                "2": "F",
                "3": "M",
                "4": "A",
                "5": "M",
                "6": "J",
                "7": "J",
                "8": "A",
                "9": "S",
                "10": "O",
                "11": "N",
                "12": "D"
            }
        }
    },
    "group_symbol": ",",
    "days": {
        "stand-alone": {
            "wide": {
                "0": "Monday",
                "1": "Tuesday",
                "2": "Wednesday",
                "3": "Thursday",
                "4": "Friday",
                "5": "Saturday",
                "6": "Sunday"
            },
            "abbreviated": {
                "0": "Monday",
                "1": "Tuesday",
                "2": "Wednesday",
                "3": "Thursday",
                "4": "Friday",
                "5": "Saturday",
                "6": "Sunday"
            },
            "narrow": {
                "0": "M",
                "1": "T",
                "2": "W",
                "3": "T",
                "4": "F",
                "5": "S",
                "6": "S"
            }
        },
        "format": {
            "wide": {
                "0": "Monday",
                "1": "Tuesday",
                "2": "Wednesday",
                "3": "Thursday",
                "4": "Friday",
                "5": "Saturday",
                "6": "Sunday"
            },
            "abbreviated": {
                "0": "Mon",
                "1": "Tue",
                "2": "Wed",
                "3": "Thu",
                "4": "Fri",
                "5": "Sat",
                "6": "Sun"
            },
            "narrow": {
                "0": "M",
                "1": "T",
                "2": "W",
                "3": "T",
                "4": "F",
                "5": "S",
                "6": "S"
            }
        }
    },
    "datetime_formats": {
        "null": "{1} {0}"
    },
    "percent_format": "#,##0%",
    "min_week_days": 1,
    "first_week_day": 6,
    "periods": {
        "am": "AM",
        "pm": "PM"
    },
    "minus_sign": "-",
    "time_formats": {
        "medium": {
            "pattern": "h:mm:ss a",
            "format": "%(h)s:%(mm)s:%(ss)s %(a)s"
        },
        "full": {
            "pattern": "h:mm:ss a v",
            "format": "%(h)s:%(mm)s:%(ss)s %(a)s %(v)s"
        },
        "long": {
            "pattern": "h:mm:ss a z",
            "format": "%(h)s:%(mm)s:%(ss)s %(a)s %(z)s"
        },
        "short": {
            "pattern": "h:mm a",
            "format": "%(h)s:%(mm)s %(a)s"
        }
    },
    "quarters": {
        "stand-alone": {
            "wide": {
                "1": "1st quarter",
                "2": "2nd quarter",
                "3": "3rd quarter",
                "4": "4th quarter"
            },
            "abbreviated": {
                "1": "1st quarter",
                "2": "2nd quarter",
                "3": "3rd quarter",
                "4": "4th quarter"
            },
            "narrow": {
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4"
            }
        },
        "format": {
            "wide": {
                "1": "1st quarter",
                "2": "2nd quarter",
                "3": "3rd quarter",
                "4": "4th quarter"
            },
            "abbreviated": {
                "1": "Q1",
                "2": "Q2",
                "3": "Q3",
                "4": "Q4"
            },
            "narrow": {
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4"
            }
        }
    },
    "plus_sign": "+",
    "number_format": "#,##0.###",
    "locale_name": "en_US"
};