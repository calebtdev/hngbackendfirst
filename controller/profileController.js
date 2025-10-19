const axios = require('axios');

const getProfile = async (req, res) => {
    try {
        const { USER_EMAIL, USER_NAME, USER_STACK } = process.env;

        if (!USER_EMAIL || !USER_NAME || !USER_STACK) {
            throw new Error("Missing environment variables");
        }

        const catFactResponse = await axios.get('https://catfact.ninja/fact', {
            timeout: 5000
        });

        const catFact = catFactResponse.data.fact;

        const response = {
            status: "success",
            user: {
                email: USER_EMAIL,
                name: USER_NAME,
                stack: USER_STACK
            },
            timestamp: new Date().toISOString(),
            fact: catFact
        };

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'no-store');
        res.status(200).json(response);

    } catch (error) {
        console.error("Error fetching cat fact:", error.message);

        res.status(500).json({
            status: "error",
            message: "Unable to fetch cat fact at this time. Please try again later.",
            ...(process.env.NODE_ENV !== "production" && { error: error.message })
        });
    }
};

module.exports = { getProfile };
