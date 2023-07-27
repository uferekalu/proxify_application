import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import DefaultLayout from '@/components/layout/DefaultLayout'
import '@/styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App({ Component, pageProps }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </DndProvider>
  )
}
