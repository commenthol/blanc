export default M;
declare namespace M {
    export { sync };
    export { async };
    export { MyClass };
}
import { sync } from './my';
import { async } from './my';
import MyClass from './myclass';
