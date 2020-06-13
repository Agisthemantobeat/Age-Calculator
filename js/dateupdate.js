function calcage() {
    var input = document.getElementById('birth_date').value;

    var d = new Date(input);
    var m = 0;
    vardX = 0;
    var y = 0;

    year = d.getFullYear();
    month = d.getMonth() + 1;
    day = d.getDate();
    var presentyear = new Date().getFullYear(); // calculates the present year
    var presentmonth = new Date().getMonth() + 1; // calculates the present month
    var presentdate = new Date().getDate(); // calculates the present date
    if (day == presentdate && month == presentmonth && year == presentyear) {
        document.getElementById("textcover").innerHTML = "HAPPY BIRTHDAY";
    } else if (presentmonth >= month && year <= presentyear)

    {
        if (presentmonth == month && presentdate < day && presentyear == year) {
            document.getElementById("textcover").innerHTML = "INVALID INPUT";
        } else {
            y = presentyear - year;
            if (presentmonth == month) {
                m = 0;
            } else if (presentmonth != month && ((presentdate - day) * (presentmonth - month)) > 30) {
                m = presentmonth - month;
            } else {
                m = presentmonth - month - 1;
            }

            if (presentdate > day) {
                dX = presentdate - day - 1;
            } else if (month == 4 || month == 6 || month == 9 || month == 11) {
                dX = 30 - day + presentdate;
            } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 10 || month == 12) {
                dX = 31 - day + presentdate - 1;
            } else if (month == 2) {
                if ((year % 4 == 0 && year % 400 == 0 && year % 100 == 0) || (year % 4 == 0 && year % 100 != 0)) {
                    dX = 29 - day + presentdate - 1;
                } else if ((year % 4 != 0) || (year % 4 == 0 && year % 100 == 0 && year % 400 != 0)) {

                    dX = 28 - day + presentdate - 1;
                } else {
                    dX = "INVALID INPUT";
                }
            }


            document.getElementById("textcover").innerHTML = "You are " + y + "years " + (m) + "months " + dX + "days old";
        }
    } else if (presentmonth < month && year < presentyear) {
        y = presentyear - year - 1;

        m = 12 - presentmonth + 12 - (month) - 1;


        if (presentdate > day) {
            dX = presentdate - day - 1;
        } else if (month == 4 || month == 6 || month == 9 || month == 11) {
            dX = 30 - day + presentdate;
        } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 10 || month == 12) {
            dX = 31 - day + presentdate;
        } else if (month == 2) {
            if ((year % 4 == 0 && year % 400 == 0 && year % 100 == 0) || (year % 4 == 0 && year % 100 != 0)) {
                dX = 29 - day + presentdate - 1;
            } else if ((year % 4 != 0) || (year % 4 == 0 && year % 100 == 0 && year % 400 != 0)) {

                dX = 28 - day + presentdate - 1;
            } else {
                dX = "INVALID INPUT";
            }


        }
        document.getElementById("textcover").innerHTML = "You are " + y + "years " + m + "months " + dX + "days old";
    } else {
        document.getElementById("textcover").innerHTML = "INVALID INPUT";

    }
}