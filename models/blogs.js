'use strict';

import {Model} from 'sequelize';


const createblogs = (sequelize, DataTypes) => {
  class blogs extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  blogs.init({ 
    titre: DataTypes.STRING,
    description: DataTypes.STRING, 
    image:DataTypes.BLOB('long'),
    idea:DataTypes.STRING , 

  }, {
    sequelize,
    modelName: 'blogs',
  });
  return blogs;
};
export default createblogs ;