class Component {

    public renderHeader(): string {
        return ``
    }

    public renderFooter(): string {
        return `
        <hr/>
        <footer class="footer">
            &copy; AdBlocker
        </footer>
        `;
    }
}

export default Component;
