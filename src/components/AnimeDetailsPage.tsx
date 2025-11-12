import React, { useState, useEffect } from 'react';
import { fetchAnimeDetails, AnimeDetails } from '../services/animeApi';
import './AnimeDetailsPage.css';

interface AnimeDetailsPageProps {
    animeId: number;
    onBack: () => void;
}

const AnimeDetailsPage: React.FC<AnimeDetailsPageProps> = ({ animeId, onBack }) => {
    const [anime, setAnime] = useState<AnimeDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadAnimeDetails = async () => {
            try {
                setLoading(true);
                setError(null);
                const details = await fetchAnimeDetails(animeId);
                setAnime(details);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load anime details');
            } finally {
                setLoading(false);
            }
        };

        loadAnimeDetails();
    }, [animeId]);

    if (loading) {
        return (
            <div className="anime-details-page">
                <div className="loading-container">
                    <div className="spinner"></div>
                    <h2>Loading anime details...</h2>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="anime-details-page">
                <div className="error-container">
                    <h2>Error loading anime details</h2>
                    <p>{error}</p>
                    <button onClick={onBack} className="back-btn">
                        ← Go Back
                    </button>
                </div>
            </div>
        );
    }

    if (!anime) {
        return (
            <div className="anime-details-page">
                <div className="error-container">
                    <h2>Anime not found</h2>
                    <button onClick={onBack} className="back-btn">
                        ← Go Back
                    </button>
                </div>
            </div>
        );
    }

    const imageUrl = anime.images?.webp?.large_image_url ||
        anime.images?.webp?.image_url ||
        anime.images?.jpg?.large_image_url ||
        anime.images?.jpg?.image_url ||
        'https://via.placeholder.com/400x600?text=No+Image';

    return (
        <div className="anime-details-page">
            <div className="details-header">
                <button onClick={onBack} className="back-btn">
                    ← Back to List
                </button>
            </div>

            <div className="anime-details-container">
                <div className="anime-image-section">
                    <img src={imageUrl} alt={anime.title} className="anime-poster" />

                    {anime.trailer?.youtube_id && (
                        <div className="trailer-section">
                            <h3>Trailer</h3>
                            <div className="trailer-container">
                                <iframe
                                    width="100%"
                                    height="200"
                                    src={`https://www.youtube.com/embed/${anime.trailer.youtube_id}`}
                                    title="Anime Trailer"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>

                <div className="anime-info-section">
                    <div className="title-section">
                        <h1 className="anime-title">{anime.title}</h1>
                        {anime.title_english && anime.title_english !== anime.title && (
                            <h2 className="anime-title-english">{anime.title_english}</h2>
                        )}
                        {anime.title_japanese && (
                            <h3 className="anime-title-japanese">{anime.title_japanese}</h3>
                        )}
                    </div>

                    <div className="anime-stats">
                        <div className="stat-grid">
                            {anime.score && (
                                <div className="stat-item">
                                    <span className="stat-label">Score</span>
                                    <span className="stat-value score">{anime.score}/10</span>
                                </div>
                            )}
                            {anime.rank && (
                                <div className="stat-item">
                                    <span className="stat-label">Rank</span>
                                    <span className="stat-value">#{anime.rank}</span>
                                </div>
                            )}
                            {anime.popularity && (
                                <div className="stat-item">
                                    <span className="stat-label">Popularity</span>
                                    <span className="stat-value">#{anime.popularity}</span>
                                </div>
                            )}
                            {anime.episodes && (
                                <div className="stat-item">
                                    <span className="stat-label">Episodes</span>
                                    <span className="stat-value">{anime.episodes}</span>
                                </div>
                            )}
                            {anime.duration && (
                                <div className="stat-item">
                                    <span className="stat-label">Duration</span>
                                    <span className="stat-value">{anime.duration}</span>
                                </div>
                            )}
                            {anime.status && (
                                <div className="stat-item">
                                    <span className="stat-label">Status</span>
                                    <span className="stat-value">{anime.status}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {anime.synopsis && (
                        <div className="synopsis-section">
                            <h3>Synopsis</h3>
                            <p className="synopsis-text">{anime.synopsis}</p>
                        </div>
                    )}

                    <div className="details-grid">
                        {anime.genres && anime.genres.length > 0 && (
                            <div className="detail-section">
                                <h4>Genres</h4>
                                <div className="tag-list">
                                    {anime.genres.map((genre) => (
                                        <span key={genre.mal_id} className="tag genre-tag">
                                            {genre.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {anime.studios && anime.studios.length > 0 && (
                            <div className="detail-section">
                                <h4>Studios</h4>
                                <div className="tag-list">
                                    {anime.studios.map((studio) => (
                                        <span key={studio.mal_id} className="tag studio-tag">
                                            {studio.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {anime.producers && anime.producers.length > 0 && (
                            <div className="detail-section">
                                <h4>Producers</h4>
                                <div className="tag-list">
                                    {anime.producers.slice(0, 5).map((producer) => (
                                        <span key={producer.mal_id} className="tag producer-tag">
                                            {producer.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="detail-section">
                            <h4>Information</h4>
                            <div className="info-list">
                                {anime.year && (
                                    <div className="info-item">
                                        <span className="info-label">Year:</span>
                                        <span className="info-value">{anime.year}</span>
                                    </div>
                                )}
                                {anime.season && (
                                    <div className="info-item">
                                        <span className="info-label">Season:</span>
                                        <span className="info-value">{anime.season}</span>
                                    </div>
                                )}
                                {anime.source && (
                                    <div className="info-item">
                                        <span className="info-label">Source:</span>
                                        <span className="info-value">{anime.source}</span>
                                    </div>
                                )}
                                {anime.rating && (
                                    <div className="info-item">
                                        <span className="info-label">Rating:</span>
                                        <span className="info-value">{anime.rating}</span>
                                    </div>
                                )}
                                {anime.broadcast?.string && (
                                    <div className="info-item">
                                        <span className="info-label">Broadcast:</span>
                                        <span className="info-value">{anime.broadcast.string}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {anime.background && (
                        <div className="background-section">
                            <h4>Background</h4>
                            <p className="background-text">{anime.background}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AnimeDetailsPage;