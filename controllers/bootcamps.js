const Bootcamp = require("../models/Bootcamp");
// @desc    Get all bootcamps
// @route    GET /api/v1/bootcamps
// @address  Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, length: bootcamps.length, data: bootcamps });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};
// @desc    Get single bootcamps
// @route    GET /api/v1/bootcamps/:id
// @address  Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false, msg: err });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};
// @desc    create new bootcamp
// @route    POST /api/v1/bootcamps/:id
// @address  Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};
// @desc     update bootcamp
// @route    PUT /api/v1/bootcamps/:id
// @address  Private
exports.updateBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
  if (!bootcamp){
    res.status(400).json({success: false})
  }
  
  res
    .status(200)
    .json({ success: true, data: bootcamp });
};
// @desc     delete bootcamp
// @route    DELETE /api/v1/bootcamps/:id
// @address  Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `display bootcamp ${req.params.id}` });
};
