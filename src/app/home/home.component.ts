import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component ({
    selector:'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent{
    ToDo = [
        {
            "name":"task 1",
            "content":"Analyze the new requirements gathered from the customer."
        },
        {
            "name":"task 2",
            "content":"Arrange a web meeting with the customer to get new requirements."
        },
        {
            "name":"task 3",
            "content":"Show the retrieved data from the server in grid control."
        }
    ]

    InProgress = [
        {
            "name":"task 5",
            "content":"Improve application performance."
        },
        {
            "name":"task 6",
            "content":"Fix the issue reported in the IE browser."
        },
        {
            "name":"task 7",
            "content":"Fix cannot open user's default database SQL error."
        },
        {
            "name":"task 8",
            "content":"Improve the performance of the editing functionality."
        }
    ]

    InReview = [
        {
            "name":"task 9",
            "content":"Fix the issue reported by the customer."
        },
        {
            "name":"task 10",
            "content":"Fix the issue reported in Safari browser."
        },
        {
            "name":"task 11",
            "content":"Fix the issue reported in data binding."
        },
        {
            "name":"task 12",
            "content":"Test editing functionality."
        }
    ]

    Done = [
        {
            "name":"task 13",
            "content":"Test the application in the IE browser."
        },
        {
            "name":"task 14",
            "content":"Analyze SQL server 2008 connection."
        },
        {
            "name":"task 15",
            "content":"Analyze grid control."
        },
        {
            "name":"task 16",
            "content":"Stored procedure for intial data binding of the grid."
        }
    ]
}