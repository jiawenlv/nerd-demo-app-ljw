// 测试修复后的主处理函数（包含内联条件逻辑）
import testConditionScriptHandler from './src/logic/test-condition-script/index.js';

async function testMainHandler() {
    console.log('=== 测试主处理函数（内联条件逻辑）===');
    
    try {
        // 测试 TRUE 分支 (input_1 > 100)
        console.log('\n测试 TRUE 分支 (input = 200):');
        const result1 = await testConditionScriptHandler(200);
        console.log('实际结果:', result1);
        console.log('期望结果: { output2: 200 }');
        
        const expectedTrue = { output2: 200 };
        const isCorrectTrue = JSON.stringify(result1) === JSON.stringify(expectedTrue);
        console.log('✓ 结果正确:', isCorrectTrue);
        
        // 测试 FALSE 分支 (input_1 <= 100)
        console.log('\n测试 FALSE 分支 (input = 50):');
        const result2 = await testConditionScriptHandler(50);
        console.log('实际结果:', result2);
        console.log('期望结果: { output1: "End3 result" }');
        
        const expectedFalse = { output1: "End3 result" };
        const isCorrectFalse = JSON.stringify(result2) === JSON.stringify(expectedFalse);
        console.log('✓ 结果正确:', isCorrectFalse);
        
        // 边界测试
        console.log('\n测试边界值 (input = 100):');
        const result3 = await testConditionScriptHandler(100);
        console.log('实际结果:', result3);
        console.log('期望结果: { output1: "End3 result" } (因为条件是 > 100)');
        
        const isCorrectBoundary = JSON.stringify(result3) === JSON.stringify(expectedFalse);
        console.log('✓ 边界值正确:', isCorrectBoundary);
        
        // 总结
        console.log('\n=== 测试总结 ===');
        console.log('TRUE 分支测试:', isCorrectTrue ? '✅ 通过' : '❌ 失败');
        console.log('FALSE 分支测试:', isCorrectFalse ? '✅ 通过' : '❌ 失败');
        console.log('边界值测试:', isCorrectBoundary ? '✅ 通过' : '❌ 失败');
        
        if (isCorrectTrue && isCorrectFalse && isCorrectBoundary) {
            console.log('\n🎉 所有测试通过！主处理函数的内联条件逻辑工作正常。');
            console.log('✅ 条件节点现在正确地内联在主处理函数中，而不是生成单独的函数文件。');
        } else {
            console.log('\n❌ 部分测试失败，需要进一步调试。');
        }
        
    } catch (error) {
        console.error('❌ 测试过程中发生错误:', error);
    }
}

testMainHandler();