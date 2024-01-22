export const formDataToObject = async (formData) => {
    var object = {};
    formData.forEach((value, key) => {
        if(typeof(value) != "object"){
            object[key] = value;
        }
    });
    return object;
}