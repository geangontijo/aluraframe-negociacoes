class LoadingView extends View {

    template(status) {

        if (status === true)
            return `
            <div id="overlay">
                <div id="circle2"></div>
            </div>`;

        return '';
    }
}