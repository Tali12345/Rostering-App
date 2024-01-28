export const apiStorage = {
    getItem: async (key) => {
        try {
            const res = await fetch('/state');

            if (!res.ok) {
                throw new Error('request failed');
            }

            const data = await res.json();
            return JSON.stringify(data);
        } catch (error) {
            throw error;
        }
    },
    setItem: async (key, item) => {
        try {
            const res = await fetch('/state', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: item
            });

            if (!res.ok) {
                throw new Error('request failed');
            }

            return;

        } catch (error) {
            throw error;
        }
    }
}
