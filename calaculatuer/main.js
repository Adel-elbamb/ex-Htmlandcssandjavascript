function btnplus() {
    'use strict';
    document.Calculator.display.value += '+';
  }
  function btnsub() {
    'use strict';
    document.Calculator.display.value += '-';
  }
  function btnmult() {
    'use strict';
    document.Calculator.display.value += '*';
  }
  function btndiv() {
    'use strict';
    document.Calculator.display.value += '/';
  }
  function btndot () {
    'use strict';
    document.Calculator.display.value += '.';
  }
  function btnMod() {
    'use strict';
    document.Calculator.display.value += '%';
  }
  function btneval() {
    'use strict';
    document.Calculator.display.value = eval(document.Calculator.display.value);
  }
  function btnclear() {
    'use strict';
    document.Calculator.display.value = '';
  }