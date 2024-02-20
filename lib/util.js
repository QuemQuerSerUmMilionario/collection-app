export const formDataToObject = async (formData) => {
    var object = {};
    object.files = [];
    formData.forEach((value, key) => {
        if (value instanceof File) {
            object.files.push(value);
        }else if ( "files" == key) {
            for (var i = 0; i < value.length; i++) {
                console.log(value[i]);
                object.files.push(value[i]);
            }
        } else if (typeof value !== "object") {
            object[key] = value;
        }
    });
    return object;
}

export const handleResponse = async (object,code,contentType) => {
    return new Response(object, {
        status: code,
        headers: {
          'Content-Type': contentType,
        },
    });
}