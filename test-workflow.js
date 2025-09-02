// 测试修复后的工作流条件节点
import fs from 'fs';
import path from 'path';

// 动态导入函数来处理特殊字符的文件名
async function loadModule(filePath) {
    return import(filePath);
}

async function testWorkflow() {
    console.log('=== 测试条件工作流逻辑 ===');
    
    // 直接测试各个节点的功能
    try {
        // 导入各个模块
        const javascript5 = await loadModule('./src/logic/test-condition-script/+javascript%235.js');
        const javascript7 = await loadModule('./src/logic/test-condition-script/+javascript%237.js');
        const end2 = await loadModule('./src/logic/test-condition-script/end2.js');
        const end3 = await loadModule('./src/logic/test-condition-script/end3.js');
        
        console.log('\n测试各个节点:');
        
        // 测试 javascript5
        const result1 = await javascript5.default({ input_1: 200 });
        console.log('Javascript#5 输出:', result1);
        
        // 测试 javascript7
        const result2 = await javascript7.default({ result: result1.result });
        console.log('Javascript#7 输出:', result2);
        
        // 测试 end2
        const result3 = await end2.default(200);
        console.log('End2 输出:', result3);
        
        // 测试 end3
        const result4 = await end3.default();
        console.log('End3 输出:', result4);
        
        // 测试条件逻辑
        console.log('\n测试条件逻辑:');
        console.log('True 分支 (input > 100):');
        console.log('1. Javascript#5(200) ->', result1);
        console.log('2. Javascript#7(result) ->', result2);
        console.log('3. End2(200) ->', result3);
        console.log('最终输出应该是:', { output2: result3.output2 });
        
        console.log('\nFalse 分支 (input <= 100):');
        console.log('1. End3() ->', result4);
        console.log('最终输出应该是:', { output1: result4.output1 });
        
    } catch (error) {
        console.error('错误:', error);
    }
}

testWorkflow();