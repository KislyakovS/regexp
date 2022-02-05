const debounce = <F extends (...args: any[]) => any>(func: F, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  const debounced = (...args: any[]) => {
    clearInterval(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  }

  return debounced as (...args: any[]) => ReturnType<F>
}

export default debounce;
