interface Window {
    versions: {
        node: () => string;
        chrome: () => string;
        electron: () => string;
    };

    actions: {
        close: () => void;
        minimize: () => void;
        maximize: () => void;
    };

    host: {
        execute: ( command: string ) => void;
    };
}
