//   ||运算符可以用来填充默认值
var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";

//  &&运算符可以用来避免错误
flight.equipment                                                   //undefined
flight.equipment.model                                         //throw "TypeError"
flight.equipment && flight.equipment.model            //undefined