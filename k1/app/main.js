import React from 'react';
import {render} from 'react-dom';
import Greeter from './hello';

import '../style/main.css';//使用require导入css文件

render(<Greeter />, document.getElementById('content'));