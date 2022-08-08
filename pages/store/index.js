import Link from 'next/link';
import Layout from '../../components/layout';
import { getItems } from '../../services/itemService';

export default function Store ({items}) {
    return (
        <Layout>
            <h1>Store</h1>
            <div>
                {
                    items && items.map((item) => (
                        <div key={item.id}>{item.title}</div>
                    ))
                }
            </div>
        </Layout>
    );

}

export async function getStaticProps(){
    const res = await getItems();

    return {
        props: {
            items: res
        }
    };
}
