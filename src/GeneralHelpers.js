import { months } from "./Constants";

export const isInDev = () => {
    const inDev = new Date();
    const launchDate = new Date('August 25, 2021 12:00:00');
    return inDev < launchDate;
}

export const getLaunchDate = () => {
    return new Date('2021-08-25T12:00:00')
}

export const blurDataUrl = () => {
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

// Form submission on footer and collaborate / contact page.
export const handleOnSubmit = async(e, request) => {
    e.preventDefault();

    const formData = {};
    Array.from(e.currentTarget).forEach(field => {
        if(!field.name) 
            return;
        formData[field.name] = field.value;
    });

    formData['type'] = request;
    if(formData['subject'] == null)
        formData['subject'] = `${formData.name} would like to collaborate with you.`

    return fetch('http://localhost:3000/api/mail', {
        method: 'post',
        body: JSON.stringify(formData)
    });
}