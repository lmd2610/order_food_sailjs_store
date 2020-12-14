/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

const shipper = require("../api/policies/shipper");

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ********************foo*******************************************************/

  '*': true,
  'swagger': true,
  'swagger/swagger.json': true,
 

  'store/create': 'notAuthStore',
  'store/get-all': 'store',
  'store/get-store-by-id': 'store',
  'store/login': 'notAuthStore',

  
};
