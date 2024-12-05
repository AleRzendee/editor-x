 //! Inicialização do Quill com Placeholder
    var quill = new Quill('#editor', {
        modules: {
          toolbar: '#toolbar',
        },
        placeholder: 'Escreva seu texto aqui...',
        theme: 'snow'
      });