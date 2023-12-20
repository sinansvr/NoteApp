"use strict";

const Tutorial = require("../models/tutorial");

module.exports = {
  list: async (req, res) => {

    /*
            #swagger.tags = ["Tutorials"]
            #swagger.summary = "List Tutorials"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
    */
    const data = await res.getModelList(Tutorial);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Tutorial),
      data,
    });
  },

  create: async (req, res) => {

    /*
            #swagger.tags = ["Tutorials"]
            #swagger.summary = "Create Tutorial"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { "name": "Tutorial name" }
            }
    */
    const data = await Tutorial.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {

    /*
            #swagger.tags = ["Tutorials"]
            #swagger.summary = "Get Single Tutorial"
    */
    const data = await Tutorial.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {

    /*
            #swagger.tags = ["Tutorials"]
            #swagger.summary = "Update Tutorial"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { "name": " new Tutorial name"  }
            }
    */
    const data = await Tutorial.updateOne({ _id: req.params.id });

    res.status(202).send({
      error: false,
      data,
      new: await Tutorial.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {

    /*
            #swagger.tags = ["Tutorials"]
            #swagger.summary = "Delete Tutorial"
    */
    const data = await Tutorial.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
