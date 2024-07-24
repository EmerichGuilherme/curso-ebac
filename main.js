$(document).ready(function() {
    const form = $('#formulario-tarefas');
    const input = $('#nome-tarefa');
    const taskList = $('#lista-de-tarefas');
    const limparTarefas = $('#limpar-tarefas'); 

    form.submit(function(e) {
        e.preventDefault();
        const textoTarefa = input.val().trim();
        if (textoTarefa) {
            addTask(textoTarefa);
            input.val('');
        }
    });

    limparTarefas.click(function() {
        taskList.empty()
    });
    function addTask(text) {
        const li = $('<li>').text(text);
        li.click(toggleTask);
        taskList.append(li);
    }

    function toggleTask() {
        $(this).toggleClass('completed');
    }
});