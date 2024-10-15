export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      // Use the variables in some way, even if only for demonstration
      console.log('Tasks changed:', task, task2);
    }
  
    return [task, task2];
  }
  