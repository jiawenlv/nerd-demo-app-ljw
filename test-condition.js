// 测试完整的条件节点功能
import condition from './src/logic/test-condition-script/condition.js';

async function testConditionWorkflow() {
    console.log('=== 测试完整的条件工作流 ===');
    
    try {
        // 测试 true 分支 (input_1 > 100)
        console.log('\n测试 TRUE 分支 (input = 200):');
        const result1 = await condition(200);
        console.log('实际结果:', result1);
        console.log('期望结果: { output2: 200 }');
        
        const expectedTrue = { output2: 200 };
        const isCorrectTrue = JSON.stringify(result1) === JSON.stringify(expectedTrue);
        console.log('✓ 结果正确:', isCorrectTrue);
        
        // 测试 false 分支 (input_1 <= 100)
        console.log('\n测试 FALSE 分支 (input = 50):');
        const result2 = await condition(50);
        console.log('实际结果:', result2);
        console.log('期望结果: { output1: "End3 result" }');
        
        const expectedFalse = { output1: "End3 result" };
        const isCorrectFalse = JSON.stringify(result2) === JSON.stringify(expectedFalse);
        console.log('✓ 结果正确:', isCorrectFalse);
        
        // 总结
        console.log('\n=== 测试总结 ===');
        console.log('TRUE 分支测试:', isCorrectTrue ? '✅ 通过' : '❌ 失败');
        console.log('FALSE 分支测试:', isCorrectFalse ? '✅ 通过' : '❌ 失败');
        
        if (isCorrectTrue && isCorrectFalse) {
            console.log('\n🎉 所有测试通过！条件节点已正确实现完整的流程链条执行。');
        } else {
            console.log('\n❌ 部分测试失败，需要进一步调试。');
        }
        
    } catch (error) {
        console.error('❌ 测试过程中发生错误:', error);
    }
}

testConditionWorkflow();