import { NextApiRequest, NextApiResponse } from 'next';


export default (
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
); void => {
    res.status(200).json ({ message: 'Working!'});
};