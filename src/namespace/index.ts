namespace Utility {
  export function log(msg: string) {
    console.log(msg);
  }

  export function error(msg: string) {
    console.log(msg);
  }
}

// usage
Utility.log("Call me");
Utility.error("maybe");

(function (Utility) {
  console.log(Utility, "Utility");
  // 添加属性至 Utility
})(Utility || {});

const foo = "foo";
export { foo };
