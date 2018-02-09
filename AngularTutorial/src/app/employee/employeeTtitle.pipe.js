"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var EmployeeTitlePipe = /** @class */ (function () {
    function EmployeeTitlePipe() {
    }
    EmployeeTitlePipe.prototype.transform = function (value, gender) {
        if (gender.toLowerCase() === 'male') {
            return "Mr " + value;
        }
        return "Miss " + value;
    };
    return EmployeeTitlePipe;
}());
exports.EmployeeTitlePipe = EmployeeTitlePipe;
//# sourceMappingURL=employeeTtitle.pipe.js.map