const HeroImage: React.FC = () => {
    return (
        <div className="h-100% px-6 lg:w-100%">
            <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-fit">
                <img src="/images/sauna1.jpeg" alt="Hero" />
            </div>
            <div className="my-12 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
                <img src="/images/sauna1.jpeg" alt="image" />
            </div>
        </div>
    );
}
export default HeroImage;