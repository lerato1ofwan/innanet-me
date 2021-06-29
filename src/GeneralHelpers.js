import { months } from "./services/models/Constants";

export const isInDev = () =>{
    const inDev = new Date();
    const launchDate = new Date('July 02, 2021 12:00:00');
    return inDev < launchDate;
}

export const blurDataUrl = () =>{
    const data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAYSURBVBhXY2RgYPgPxGDABKXBAInDwAAAI3kBBSpozL8AAAAASUVORK5CYII=";
    return data;
}

export const getDate = (date) => {
    let formatedDate = new Date(date);
    formatedDate =  `${formatedDate.getDate()} ${getMonth(formatedDate.getMonth())} ${formatedDate.getFullYear()}`
    return formatedDate;
}

export const getMonth = (monthNumber) => {
    return months[monthNumber];
}

export const sortByDate = (a, b) => {
    return new Date(b.PublishedDate) - new Date(a.PublishedDate)
} 