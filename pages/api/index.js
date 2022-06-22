import data from '../../data.json';

const handler = (req, res) => {
    res.status(200).json({
        status: "Success",
        data
    });
}

export default handler;