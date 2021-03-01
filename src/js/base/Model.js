window.Model = function () {
    return {
        get(url) {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open('get', url);
                xhr.send();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            resolve(JSON.parse(xhr.responseText));
                        } else {
                            reject(xhr);
                        }
                    }
                }
            })
        },
        post(url, data) {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open('post', url);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(JSON.stringify(data));
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            resolve(JSON.parse(xhr.responseText));
                        } else {
                            reject(xhr.statusText);
                        }
                    }
                }
            })
        }
    }
}
