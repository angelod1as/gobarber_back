"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ListProviderDayAvailabilityService = _interopRequireDefault(require("../../../services/ListProviderDayAvailabilityService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProviderDayAvailabilityController {
  async index(request, response) {
    const {
      provider_id
    } = request.params;
    const {
      day,
      month,
      year
    } = request.query;

    const listProviderDayAvailabilityService = _tsyringe.container.resolve(_ListProviderDayAvailabilityService.default);

    const providers = await listProviderDayAvailabilityService.execute({
      day: Number(day),
      month: Number(month),
      year: Number(year),
      provider_id
    });
    return response.json(providers);
  }

}

exports.default = ProviderDayAvailabilityController;