import { useRouter } from "next/router";

const DocsPage = () => {
    const router = useRouter();
    const { params = [] } = router.query;
    const [featureId, concenptId] = params;

    console.log(featureId, concenptId);

    return (
        <h1>Docs page with feature: {featureId} and concept {concenptId}</h1>
    )
}

export default DocsPage;