function runTests() {
  console.log('Running tests...');
  
  // Test task creation
  testTaskCreation();
  
  // Test date formatting
  testDateFormatting();
  
  // Test user management
  testUserManagement();
}

function testTaskCreation() {
  const taskData = {
    title: 'Test Task',
    description: 'Test Description',
    priority: 'high'
  };
  
  const result = addTask(taskData);
  
  if (result.success) {
    console.log('✅ Task creation test passed');
  } else {
    console.log('❌ Task creation test failed:', result.message);
  }
}
