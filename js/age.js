function calcage() {
    var input = document.getElementById('birth_date').value;
    var dx = new Date(input);
    var m = 0;
    var y = 0;
    var d = 0;
    var flag = 0;
    year = dx.getFullYear();
    month = dx.getMonth() + 1;
    date = dx.getDate();
    var presentyear = new Date().getFullYear(); // calculates the present year
    var presentmonth = new Date().getMonth() + 1; // calculates the present month
    var presentdate = new Date().getDate(); // calculates the present date
    if (date == presentdate && month == presentmonth && year == presentyear) {
        flag = 1;
        document.getElementById("textcover").innerHTML = "HAPPY BIRTHDAY";
    } else if (presentdate >= date && presentmonth >= month && presentyear >= year) {
        d = presentdate - date;
        m = presentmonth - month;
        y = presentyear - year;
    } else if (presentdate < date && presentmonth > month && presentyear >= year) {
        while (presentdate < date) {
            if (presentmonth > 0 && presentyear > 0) {
                presentdate = presentdate + 30;
                presentmonth = presentmonth - 1;
            } else if (presentmonth < 0 && presentyear > 0) {
                presentdate = presentdate + 30;
                presentmonth = presentmonth + 11;
                presentyear = presentyear - 1;

            } else {
                document.getElementById("textcover").innerHTML = "Invalid Input";
                break;
            }
        }
        y = presentyear - year;
        m = presentmonth - month;
        d = presentdate - date + 1;
    } else if (presentdate > date && presentmonth < month && presentyear > year) {
        while (presentmonth < month) {
            if (presentyear > 0) {
                presentmonth = presentmonth + 12;
                presentyear = presentyear - 1;
            } else {
                document.getElementById("textcover").innerHTML = "Invalid Input";
                break;
            }
        }
        y = presentyear - year;
        m = presentmonth - month;
        d = presentdate - date;
    } else if (presentdate < date && presentmonth < month && presentyear > year) {
        while (presentdate < date && presentmonth < month) {
            if (presentyear > 0 && presentdate < date && presentmonth < month) {
                presentmonth = presentmonth + 11
                presentdate = presentdate + 30;
                presentyear = presentyear - 1;

            } else if (presentdate < date && presentmonth > month && presentyear > 0)

            {
                presentmonth = presentmonth - 1;
                presentdate = presentdate + 30;
            } else {
                document.getElementById("textcover").innerHTML = "Invalid Input";
            }
        }
        y = presentyear - year;
        m = presentmonth - month;
        d = presentdate - date + 1;
    } else {
        flag = 1;
        document.getElementById("textcover").innerHTML = "Invalid Input";
    }
    if (flag != 1 && d >= 0 && y >= 0 && m >= 0) {
        document.getElementById("textcover").innerHTML = "You are " + y + "years " + m + "months " + d + "days old";
    }
}