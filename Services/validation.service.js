class ValidationService {
    validateData({ prompt, n, size }) {
        if (!prompt || !n || !size) {
            let message = "All fields are required";
            return {
                status: false,
                message
            }
        }

        if (prompt.length > 1000) {
            let message = "Discretionary text should not be greater than 1000";
            return {
                status: false,
                message
            }
        }

        if (typeof (n) != "number" || n > 10 || n <= 0) {

            let message = "Number of Image should be between 0 to 10";
            return {
                status: false,
                message
            }
        }

        if (size != "256x256" && size != "512x512" && size != "1024x1024") {
            let message = "The size of the generated images. Must be one of 256x256, 512x512, or 1024x1024";
            return {
                status: false,
                message
            }
        }

        let message = "Data are Valid";

        return {
            status: true,
            message
        }
    }
}

module.exports = new ValidationService();