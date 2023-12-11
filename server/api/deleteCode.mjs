import db from '../../database/models/index.js'; 

const { Codes } = db;

export default async (req, res) => {
  const { codeId } = req.params;

  try {
    const code = await Codes.findByPk(codeId);

    if (!code) {
      return res.status(404).json({
        message: 'Code does not exist',
        data: {},
      });
    }
    console.log(req.user, req.user.type);
    if (req.user.type !== 'admin') {
      return res.status(401).json({
        message: 'Your account cannot delete codes.',
        data: {},
      });
    }

    await code.destroy();

    return res.status(200).json({
      message: 'Success!',
      data: {},
    });

  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
    });
  }
};
