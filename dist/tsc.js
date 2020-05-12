var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
System.register("SPage", [], function (exports_1, context_1) {
    "use strict";
    var SPage;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            SPage = (function () {
                function SPage(icon, translationKey, routeKey, priority, privileges) {
                    this.icon = icon;
                    this.translationKey = translationKey;
                    this.priority = priority;
                    this.neededPrivileges = privileges;
                    this.routeKey = routeKey;
                }
                return SPage;
            }());
            exports_1("SPage", SPage);
        }
    };
});
System.register("SView", [], function (exports_2, context_2) {
    "use strict";
    var SView;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            SView = (function () {
                function SView(icon, translationKey, routeKey, priority, privileges, componentName, parentKey) {
                    this.icon = icon;
                    this.translationKey = translationKey;
                    this.priority = priority;
                    this.neededPrivileges = privileges;
                    this.routeKey = routeKey;
                    this.componentName = componentName;
                    this.parentKey = parentKey;
                }
                return SView;
            }());
            exports_2("SView", SView);
        }
    };
});
System.register("SApi", [], function (exports_3, context_3) {
    "use strict";
    var SApi;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            SApi = (function () {
                function SApi() {
                }
                SApi.prototype.getClient = function (baseURL) {
                    return __awaiter(this, void 0, void 0, function () {
                        var apiLoaded;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, this.isLoaded()];
                                case 1:
                                    apiLoaded = _a.sent();
                                    if (!!apiLoaded) return [3, 3];
                                    return [4, this.loadApi(baseURL)];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [4, this.api()];
                                case 4: return [2, _a.sent()];
                            }
                        });
                    });
                };
                return SApi;
            }());
            exports_3("SApi", SApi);
        }
    };
});
System.register("ModularusComponent", [], function (exports_4, context_4) {
    "use strict";
    var ModularusComponent;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            ModularusComponent = (function () {
                function ModularusComponent(name, component) {
                    this.name = name;
                    this.component = component;
                }
                return ModularusComponent;
            }());
            exports_4("ModularusComponent", ModularusComponent);
        }
    };
});
System.register("ModularusModule", [], function (exports_5, context_5) {
    "use strict";
    var ModularusModule;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
            ModularusModule = (function () {
                function ModularusModule() {
                    this.daemonize = false;
                }
                ModularusModule.prototype.beforeLoad = function () {
                };
                ModularusModule.prototype.afterLoad = function () {
                };
                return ModularusModule;
            }());
            exports_5("ModularusModule", ModularusModule);
        }
    };
});
System.register("Modularus", [], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("UserContext", [], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=tsc.js.map