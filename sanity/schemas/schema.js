// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity

import imageType from './objects/imageType'
import blockModule from './objects/blockModule'
import imageObject from './objects/imageObject'
import stringObject from './objects/stringObject'
import textObject from './objects/textObject'
import seo from './objects/seo'


import settingsPage from './documents/settingsPage'
import homePage from './documents/homePage'
import projectsPage from './documents/projectsPage'


export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    imageObject,
    imageType,
    blockModule,
    stringObject,
    textObject,
    seo,

    settingsPage,
    homePage,
    projectsPage
  ]),
})
