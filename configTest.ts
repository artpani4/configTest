const prodSupabase = {
  name: 'gitRaw',
  secrets: [
    {
      name: 'API_KEY',
    },
    {
      name: 'URL',
    },
  ],
  timeoutToUpdate: 100,
  mainTable: 'Invoices',
  isSubscribtionOn: false,
};

export default prodSupabase;
