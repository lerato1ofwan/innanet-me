export const isInDev = () =>{
    const inDev = new Date();
    const launchDate = new Date('July 02, 2021 12:00:00');
    return inDev < launchDate;
}